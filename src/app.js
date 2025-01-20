import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import routerTypes from "./routes/routerTypes.js";
import routerMain from "./routes/routerMain.js";
import routerHighlights from "./routes/routerHighlights.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/images", express.static(path.resolve("imgs/imgsImoveis")));
app.use(routerMain);
app.use(routerHighlights);
app.use(routerTypes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
