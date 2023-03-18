import { Router } from "express";
import searchController from "../../../adapters/controllers/searchController";
import searchRepository from "../../../application/repositories/searchRepository";
import LocationRepository from "../../../application/repositories/locationRepository";
import { SerpApiService } from "../../services/serpapi";
import { IpApiService } from "../../services/ipapi";

export default (function searchRouter() {
  const router = Router();
  const controller = searchController(
    searchRepository,
    new SerpApiService(),
    LocationRepository,
    new IpApiService()
  );
  router.get("/", controller.triggerSearch);
  return router;
})();
