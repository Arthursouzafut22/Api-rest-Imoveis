import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.get("/messages/:uid", async (req, res) => {
  const { uid } = req.params;

  if (!uid) {
    return res.status(400).json({ error: "UID do usuário é obrigatório." });
  }

  try {
    const [interesses] = await dbConnection.promise().query(
      `SELECT
          inter.id,
          i.nome AS nome_imovel,
          inter.nome,
          inter.email,
          inter.celular,
          inter.mensagem,
          inter.lida,
          inter.data_interesse
        FROM interesse_imovel inter
        JOIN imoveis i ON inter.imovel_id = i.id
        WHERE i.usuario_uid = ?
        ORDER BY inter.data_interesse DESC`,
      [uid]
    );

    res.status(200).json(interesses);
  } catch (error) {
    console.error("Erro ao buscar interesses:", error);
    res.status(500).json({ error: "Erro ao buscar interesses." });
  }
});

export default Router;
