import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.post("/interesse", async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(500).json({ error: "Error em enviar interresse" });
  }

  const nome = body.nome;
  const email = body.email;
  const celular = body.celular;
  const mensagem = body.mensagem;
  const imovel_id = body.imovel_id;

  try {
    const [imovel] = await dbConnection
      .promise()
      .query("SELECT nome FROM imoveis WHERE id = ?", [parseInt(imovel_id)]);

    if (imovel.length === 0) {
      return res.status(404).json({ error: "Imóvel não encontrado!" });
    }

    const nome_imovel = imovel[0].nome;

    await dbConnection
      .promise()
      .query(
        "INSERT INTO interesse_imovel (imovel_id, nome, email, celular, mensagem) VALUES (?, ?, ?, ?, ?)",
        [imovel_id, nome, email, celular, mensagem]
      );

    res.status(201).json({
      message: "Interesse registrado com sucesso!",
      interesse: {
        nome,
        email,
        celular,
        mensagem,
        nome_imovel,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao registrar interesse." });
  }
});

export default Router;
