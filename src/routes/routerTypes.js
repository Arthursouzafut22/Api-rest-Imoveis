import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/:tipo", (req, res) => {
  const { tipo } = req.params;
  const tipos = ["casa", "apartamento", "condominio"];
  const query = "SELECT * FROM imoveis WHERE tipo = ?";

  if (!tipos.includes(tipo)) {
    return res.status(400).json({ error: "Tipo inválido" });
  }

  consultQuery(query, res, tipo);
});

export default Router;
