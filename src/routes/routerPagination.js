import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.get("/imoveis", async (req, res) => {
  try {
    // Pegando o número da página (padrão: 1)
    const page = parseFloat(req.query.page) || 1;
    const limit = 9; // Número de imóveis por página
    const ofsset = (page - 1) * limit;

    // Query para buscar os imóveis com paginação
    const [imoveis] = await dbConnection
      .promise()
      .query("SELECT * FROM imoveis LIMIT ? OFFSET ?", [limit, ofsset]);

    // Pegando o total de imóveis para calcular a quantidade de páginas
    const [[{ total }]] = await dbConnection
      .promise()
      .query("SELECT COUNT(*) AS total FROM imoveis");

    // Calculando o total de páginas
    const totalPages = Math.ceil(total / limit);

    res.json({
      currentPage: page,
      totalPages,
      totalImoveis: total,
      imoveis,
    });
  } catch (error) {
    console.error("Erro ao buscar imóveis:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

export default Router;
