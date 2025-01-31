import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function uploadeFiles(req, res, files, callback) {
  if (!req.files || !req.files.file) {
    return res.status(400).json({ error: "Nenhum arquivo foi enviado." });
  }

  let uploadCount = 0;
  let hasError = false;

  files.forEach((file) => {
    const uploadPath = path.join(
      __dirname,
      "../../imgs/imgsImoveis",
      file.name
    );

    file.mv(uploadPath, (err) => {
      if (err && !hasError) {
        hasError = true;
        return res.status(500).json({ error: "Erro ao enviar o arquivo." });
      }

      uploadCount++;
      if (uploadCount === files.length && !hasError) {
        callback();
      }
    });
  });
}

export default uploadeFiles;
