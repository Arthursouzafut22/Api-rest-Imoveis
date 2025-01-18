import { dbConnection } from "../../db/conexao.js";

function consultQuery(query, res, tipo = null) {
  return dbConnection.query(query, [tipo], (erro, resultados) => {
    if (erro) {
      console.error("Erro ao consultar banco de dados:", erro);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }

    res.status(200).json(resultados);
  });
}

export default consultQuery;
