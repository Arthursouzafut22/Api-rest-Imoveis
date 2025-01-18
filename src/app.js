import express from "express";
import { dbConnection } from "../db/conexao.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.resolve("imgs/imgsImoveis")));

app.get("/", (_, res) => {
  const query = "SELECT * FROM imoveis";

  dbConnection.query(query, (erro, resultados) => {
    if (erro) {
      console.error("error na consulta");
      return;
    }

    res.status(200).json(resultados);
  });
});


app.get("/:tipo", (req, res) => {
  const { tipo } = req.params;
  const tipos = ["casa", "apartamento", "condominio"];

  // Verifica se o tipo fornecido é válido
  if (!tipos.includes(tipo)) {
    return res.status(400).json({ error: "Tipo inválido" });
  }

  // Utilizando prepared statements para evitar injeção de SQL
  const query = "SELECT * FROM imoveis WHERE tipo = ?";

  dbConnection.query(query, [tipo], (erro, resultados) => {
    if (erro) {
      console.error("Erro ao consultar banco de dados:", erro);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }

    res.status(200).json(resultados);
  });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
