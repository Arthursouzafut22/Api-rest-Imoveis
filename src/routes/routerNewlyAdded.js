import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/newly", (_, res) => {
  const query = "SELECT * FROM imoveis WHERE recem_adicionados = TRUE";
  consultQuery(query, res);
});

export default Router;