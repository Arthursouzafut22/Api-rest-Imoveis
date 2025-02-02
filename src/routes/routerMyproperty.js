import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/my-property", (_, res) => {
  const sql = "SELECT * FROM imoveis WHERE meus_imoveis = 1";
  consultQuery(sql, res);
});

export default Router;
