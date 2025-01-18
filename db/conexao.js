import mysql from "mysql2";

export const dbConnection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "dtaimoveis",
});

dbConnection.connect((erro) => {
  if (erro) {
    console.error("Error na conexão");
    return;
  }
  console.log("Conectado ao banco de dados!");
});
