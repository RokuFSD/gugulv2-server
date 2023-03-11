import { Router } from "express";
import searchController from "../../../adapters/controllers/searchController";
import searchRepository from "../../../application/repositories/searchRepository";
import LocationRepository from "../../../application/repositories/locationRepository";
import { SerpApiMock, SerpApiService } from "../../services/serpapi";
import { IpApiMock, IpApiService } from "../../services/ipapi";

export default (function searchRouter() {
  const router = Router();
  const controller = searchController(
    searchRepository,
    new SerpApiMock(),
    LocationRepository,
    new IpApiMock()
  );
  router.get("/", controller.triggerSearch);
  return router;
})();
