import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
import routerTypes from "./routes/routerTypes.js";
import routerMain from "./routes/routerMain.js";
import routerHighlights from "./routes/routerHighlights.js";
import routerNewlyAdded from "./routes/routerNewlyAdded.js";
import routerCreateProperty from "./routes/routerCreateProperty.js";
import routerMyproperty from "./routes/routerMyproperty.js";
import routerDeleteProperty from "./routes/routerDeleteProperty.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static(path.resolve("imgs/imgsImoveis")));
app.use(routerMain);
app.use(routerNewlyAdded);
app.use(routerHighlights);
app.use(routerMyproperty);
app.use(routerTypes);
app.use(routerCreateProperty);
app.use(routerDeleteProperty);

app.put("edit/:id", (req, res) => {});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
