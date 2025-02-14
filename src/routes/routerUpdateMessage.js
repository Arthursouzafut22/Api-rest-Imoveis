import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.put("/update-message/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await dbConnection
      .promise()
      .query("SELECT lida FROM interesse_imovel WHERE id = ?", [id]);

    if (result.length === 0) {
      return res.status(404).json({ error: "Mensagem não encontrada" });
    }

    const estadoAtual = result[0].lida;
    const novoEstado = !estadoAtual;

    await dbConnection
      .promise()
      .query("UPDATE interesse_imovel SET lida = ? WHERE id = ?", [
        novoEstado,
        id,
      ]);

    res.json({ id, lida: novoEstado });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar" });
  }
});

export default Router;
