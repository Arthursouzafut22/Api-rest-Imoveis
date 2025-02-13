import express from "express";
import uploadeFiles from "../controllers/uploadeFiles.js";
import queryCreate from "../controllers/queryCreate.js";

const Router = express.Router();

Router.post("/cadastrar", (req, res) => {
  const bodyData = JSON.parse(req.body.data);

  const usuario_uid = bodyData.uid;
  const nome = bodyData.nome;
  const tipo = bodyData.tipo;
  const camas = bodyData.quartos;
  const banheiros = bodyData.banheiros;
  const metros_quadrados = bodyData["m²"];
  const mes = bodyData.mensal;
  const localizacao = `${bodyData.cidade}/${bodyData.estados}`;
  const diaria = bodyData.diaria;
  const semanal = bodyData.semanal;
  const descricao = bodyData["descrição"];
  const comodidades = bodyData.comodidades;
  const rua = bodyData.rua;
  const numero = bodyData.numero;
  const estados = bodyData.estados;
  const cidade = bodyData.cidade;
  const bairro = bodyData.bairro;
  const cep = bodyData.cep;
  const propietario = bodyData["proprietário"];
  const email = bodyData.email;
  const celular = bodyData.celular;

  const files = Array.isArray(req.files.file)
    ? req.files.file
    : [req.files.file];

  const imgsName = files.map((name) => name.name);

  uploadeFiles(req, res, files, () => {
    const query = `INSERT INTO imoveis (nome, tipo, camas, banheiros, metros_quadrados, imagens, mes, localizacao, diaria, semanal, descricao, comodidades, em_destaque, recem_adicionados, meus_imoveis,rua,numero,bairro,estado, cidade,cep,nome_proprietario,celular_proprietario,email,usuario_uid  )
        VALUES 
        ('${nome}', '${tipo}', ${parseInt(camas)}, ${parseInt(
      banheiros
    )}, ${parseInt(metros_quadrados)}, '${JSON.stringify(
      imgsName
    )}', ${parseInt(mes)}, '${localizacao}', ${parseFloat(
      diaria
    )}, ${parseFloat(semanal)}, '${descricao}', '${JSON.stringify(
      comodidades
    )}', FALSE, FALSE, TRUE, '${rua}', ${parseInt(
      numero
    )},'${bairro}','${estados}','${cidade}','${cep}','${propietario}','${celular}','${email}','${String(
      usuario_uid
    )}')`;

    queryCreate(query, res);
  });
});

export default Router;
