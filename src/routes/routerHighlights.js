import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/destaques", (req, res) => {
  const query = "SELECT * FROM imoveis WHERE em_destaque = TRUE";

  consultQuery(query, res);
});

export default Router;
