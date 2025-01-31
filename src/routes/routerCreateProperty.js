import express from 'express';
import uploadeFiles from '../controllers/uploadeFiles.js';
import queryCreate from '../controllers/queryCreate.js';

const Router = express.Router();

Router.post("/cadastrar", (req, res) => {
    const bodyData = JSON.parse(req.body.data);
  
    let nome = bodyData.nome;
    let tipo = bodyData.tipo;
    let camas = bodyData.quartos;
    let banheiros = bodyData.banheiros;
    let metros_quadrados = bodyData["m²"];
    let mes = bodyData.mensal;
    let localizacao = `${bodyData.cidade}/${bodyData.estados}`;
    let diaria = bodyData.diaria;
    let semanal = bodyData.semanal;
    let descricao = bodyData["descrição"];
    let comodidades = bodyData.comodidades;
  
    const files = Array.isArray(req.files.file)
      ? req.files.file
      : [req.files.file];
      console.log(files)
  
    const imgsName = files.map((name) => name.name);
  
    uploadeFiles(req, res, files, () => {
      const query = `INSERT INTO imoveis (nome, tipo, camas, banheiros, metros_quadrados, imagens, mes, localizacao, diaria, semanal, descricao, comodidades, em_destaque, recem_adicionados)
        VALUES 
        ('${nome}', '${tipo}', ${parseInt(camas)}, ${parseInt(
        banheiros
      )}, ${parseInt(metros_quadrados)}, '${JSON.stringify(
        imgsName
      )}', ${parseInt(mes)}, '${localizacao}', ${parseFloat(
        diaria
      )}, ${parseFloat(semanal)}, '${descricao}', '${JSON.stringify(
        comodidades
      )}', FALSE, FALSE)`;
  
      queryCreate(query, res);
    });
  });

export default Router;