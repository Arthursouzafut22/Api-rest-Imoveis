import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.delete("/delete-messages/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM interesse_imovel WHERE id = ${parseInt(id)}`;

  dbConnection.query(sql, (error, retorno) => {
    if (error) {
      return res.status(500).json({ error: "Error em apagar menssages" });
    }

    res.status(200).json(retorno);
  });
});

export default Router;
