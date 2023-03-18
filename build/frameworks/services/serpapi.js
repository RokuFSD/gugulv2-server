"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerpApiMock = exports.SerpApiService = void 0;
const config_1 = __importDefault(require("../../config/config"));
const serpApi_1 = __importDefault(require("../../mocks/serpApi"));
const vidSerp_1 = __importDefault(require("../../mocks/vidSerp"));
const newsSerp_1 = __importDefault(require("../../mocks/newsSerp"));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(config_1.default.serpKey);
class SerpApiService {
    async search(params) {
        // Review the docs for the reject method
        return new Promise((resolve, reject) => {
            function callback(data) {
                resolve(data);
            }
            search.json(params, callback);
        });
    }
}
exports.SerpApiService = SerpApiService;
class SerpApiMock {
    async search(params) {
        return new Promise((resolve) => {
            switch (params.tbm) {
                case "nws":
                    resolve(newsSerp_1.default);
                    break;
                case "vid":
                    resolve(vidSerp_1.default);
                    break;
                default:
                    resolve(serpApi_1.default);
            }
            resolve(serpApi_1.default);
        });
    }
}
exports.SerpApiMock = SerpApiMock;
