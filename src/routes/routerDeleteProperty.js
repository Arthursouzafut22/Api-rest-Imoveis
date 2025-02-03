import express from "express";
import { dbConnection } from "../../db/conexao.js";
import deleteFileFromDirectory from "../controllers/deleteFileFromDirectory.js";

const Router = express.Router();

Router.delete("/delete-property/:id/:imagens", (req, res) => {
  const { id, imagens } = req.params;
  const parse = JSON.parse(imagens);

  const sql = `DELETE FROM imoveis WHERE id = ${parseInt(id)}`;
  deleteFileFromDirectory(parse);

  dbConnection.query(sql, (error, retorno) => {
    if (error) {
      return res.status(500).json({ error: "Erro ao deletar imovel" });
    }

    res.status(200).json(retorno);
  });
});

export default Router;
