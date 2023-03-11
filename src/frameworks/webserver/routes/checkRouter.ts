import { Router } from "express";

export default (function checkRouter() {
  const router = Router();
  router.get("/", (req, res) => {
    res.send("Hello World");
  });
  return router;
})();
