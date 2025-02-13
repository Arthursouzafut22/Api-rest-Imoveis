
// app.get("/interesse", async (req, res) => {

//   try {
//     const [interesses] = await dbConnection.promise().query(`
//           SELECT inter.id, i.nome AS nome_imovel, inter.nome, inter.email, inter.celular, inter.mensagem, inter.data_interesse
//           FROM interesse_imovel inter
//           JOIN imoveis i ON inter.imovel_id = i.id
//           ORDER BY inter.data_interesse DESC
//         `);

//     res.status(200).json(interesses);
//   } catch (error) {
//     console.error("Erro ao buscar interesses:", error);
//     res.status(500).json({ error: "Erro ao buscar interesses." });
//   }
// });

// app.get("/interesse", async (req, res) => {
//   // const { uid } = req.params; // toda vex que passo params minha aplicacao da erro...
//   // console.log(uid)

//   try {
//     const [interesses] = await dbConnection.promise().query(`
//           SELECT inter.id, i.nome AS nome_imovel, inter.nome, inter.email, inter.celular, inter.mensagem, inter.data_interesse
//           FROM interesse_imovel inter
//           JOIN imoveis i ON inter.imovel_id = i.id
//           ORDER BY inter.data_interesse DESC
//         `);

//     res.status(200).json(interesses);
//   } catch (error) {
//     console.error("Erro ao buscar interesses:", error);
//     res.status(500).json({ error: "Erro ao buscar interesses." });
//   }
// });