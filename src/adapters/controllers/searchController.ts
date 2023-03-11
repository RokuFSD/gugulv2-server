import search from "../../application/use-cases/search";
import searchRepository from "../../application/repositories/searchRepository";

import { CustomError } from "../../utils/CustomError";
import { ISearchRepository } from "../../application/repositories/searchRepository";
import { NextFunction, Request, Response } from "express";
import LocationRepository, {
  ILocationRepository,
} from "../../application/repositories/locationRepository";

export default function searchController(
  searchRepo: typeof searchRepository,
  searchRepositoryImpl: ISearchRepository,
  locationRepository: typeof LocationRepository,
  locationRepositoryImpl: ILocationRepository
) {
  const currentSearchRepo = new searchRepo(searchRepositoryImpl);
  const currentLocationRepo = new locationRepository(locationRepositoryImpl);

  async function triggerSearch(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { q, page, type } = req.query;
    if (!q) {
      return next(new CustomError("Query is required", 400));
    }

    const location = await currentLocationRepo.getLocation();
    const params = {
      q,
      location: `${location.city}, ${location.region}, ${location.country_name}`,
      gl: location.country,
      start: `${page}`,
      num: "10",
      tbm: type,
    } as {
      [key: string]: string;
    };

    res.status(200).json(await getResults(params));
  }

  async function getResults(params: { [key: string]: string }) {
    let results: { [key: string]: unknown } = {};
    const data = await search(params, currentSearchRepo);
    if (params.tbm !== "") return { ...data };
    const previousGraph = data?.knowledge_graph;
    if (previousGraph) {
      const { list, title, type, description, ...rest } = previousGraph;
      const toMap = list || rest;
      const arrayForm = Object.entries(toMap);
      const filtered = arrayForm.filter(([key, value]: any) => {
        if (Array.isArray(value)) {
          return value.length < 2 && typeof value[0] === "string";
        }
        return (
          !key.match(/link/gi) &&
          !key.match(/links/gi) &&
          !key.match(/stick/gi) &&
          typeof value === "string"
        );
      });

      results = Object.fromEntries(filtered);
    }

    return { ...data, knowledge_graph: { ...previousGraph, list: results } };
  }

  return {
    triggerSearch,
  };
}
