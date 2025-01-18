import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

dbConnection.connect((erro) => {
  if (erro) {
    console.error("Error na conexão");
    return;
  }
  console.log("Conectado ao banco de dados!");
});
