import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function deleteFileFromDirectory(parse) {
  const pastaImagens = path.join(__dirname, "../../imgs/imgsImoveis");

  parse.forEach((imagem) => {
    const caminhoImagem = path.join(pastaImagens, imagem);

    fs.unlink(caminhoImagem, (error) => {
      if (error) {
        console.log(`Falha ao remover a ${imagem}`, error);
      }
    });
  });
}

export default deleteFileFromDirectory;
