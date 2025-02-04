import express from "express";
import { dbConnection } from "../../db/conexao.js";

const Router = express.Router();

Router.put("/edit/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const tipo = body.tipo;
  const nome = body.nome;
  const descricao = body["descrição"];
  const rua = body.rua;
  const numero = body.numero;
  const bairro = body.bairro;
  const estados = body.estados;
  const cidade = body.cidade;
  const cep = body.cep;
  const quartos = body.quartos;
  const banheiros = body.banheiros;
  const metros_quadrados = body["m²"];
  const comodidades = body.comodidades;
  const semanal = body.semanal;
  const mensal = body.mensal;
  const diaria = body.diaria;
  const propietario = body["proprietário"];
  const email = body.email;
  const celular = body.celular;

  const sql = `UPDATE imoveis SET tipo='${tipo}', nome='${nome}', camas=${parseInt(
    quartos
  )},banheiros=${banheiros}, metros_quadrados=${parseInt(
    metros_quadrados
  )}, mes=${mensal}, diaria=${parseFloat(diaria)}, semanal=${parseFloat(
    semanal
  )}, descricao='${descricao}', comodidades='${JSON.stringify(
    comodidades
  )}', rua='${rua}', numero=${parseInt(
    numero
  )}, bairro='${bairro}', estado='${estados}', cidade='${cidade}', cep='${cep}', nome_proprietario='${propietario}', celular_proprietario='${celular}',email='${email}' WHERE id = ${parseInt(
    id
  )}`;

  dbConnection.query(sql, (erro, retorno) => {
    if (erro) {
      return res.status(500).json({ erro: "Error em atualizar imovel" });
    }

    res.status(200).json(retorno);
  });
});

export default Router;
