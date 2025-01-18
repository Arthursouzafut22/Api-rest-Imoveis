import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/", (_, res) => {
  const query = "SELECT * FROM imoveis";
  consultQuery(query, res);
});

export default Router;
