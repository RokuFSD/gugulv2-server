"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const search_1 = __importDefault(require("../../application/use-cases/search"));
const CustomError_1 = require("../../utils/CustomError");
function searchController(searchRepo, searchRepositoryImpl, locationRepository, locationRepositoryImpl) {
    const currentSearchRepo = new searchRepo(searchRepositoryImpl);
    const currentLocationRepo = new locationRepository(locationRepositoryImpl);
    async function triggerSearch(req, res, next) {
        const { q, page, type } = req.query;
        if (!q) {
            return next(new CustomError_1.CustomError("Query is required", 400));
        }
        const location = await currentLocationRepo.getLocation();
        const params = {
            q,
            location: `${location.city}, ${location.region}, ${location.country_name}`,
            gl: location.country,
            start: `${page}`,
            num: "10",
            tbm: type,
        };
        res.status(200).json(await getResults(params));
    }
    async function getResults(params) {
        let results = {};
        const data = await (0, search_1.default)(params, currentSearchRepo);
        if (params.tbm !== "")
            return { ...data };
        const previousGraph = data?.knowledge_graph;
        if (previousGraph) {
            const { list, title, type, description, ...rest } = previousGraph;
            const toMap = list || rest;
            const arrayForm = Object.entries(toMap);
            const filtered = arrayForm.filter(([key, value]) => {
                if (Array.isArray(value)) {
                    return value.length < 2 && typeof value[0] === "string";
                }
                return (!key.match(/link/gi) &&
                    !key.match(/links/gi) &&
                    !key.match(/stick/gi) &&
                    typeof value === "string");
            });
            results = Object.fromEntries(filtered);
        }
        return { ...data, knowledge_graph: { ...previousGraph, list: results } };
    }
    return {
        triggerSearch,
    };
}
exports.default = searchController;
