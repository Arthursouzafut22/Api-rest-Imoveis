import { dbConnection } from "../../db/conexao.js";

function queryCreate(query, res) {
  dbConnection.query(query, (erro, _) => {
    if (erro) {
      return res.status(500).json({ error: "Erro ao cadastrar imovel" });
    }

    res.status(200).json({ message: "Imóvel cadastrado com sucesso!" });
  });
}

export default queryCreate;
