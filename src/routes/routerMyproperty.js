import express from "express";
import consultQuery from "../controllers/queryConsult.js";

const Router = express.Router();

Router.get("/my-property/:uid", (req, res) => {
  const { uid } = req.params;

  if (!uid) {
    return res.status(400).json({ error: "UID do usuário é obrigatório" });
  }

  const sql = `SELECT * FROM imoveis WHERE usuario_uid = '${String(uid)}'`;
  consultQuery(sql, res);
});

export default Router;
