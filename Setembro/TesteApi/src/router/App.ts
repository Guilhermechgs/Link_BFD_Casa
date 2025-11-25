import express, {Request, Response} from "express"
import lojaRouter from "./loja.router";
import { Iniciar_Estoque } from "../Entidades/Iniciar";

const app = express()
app.use(express.json())

Iniciar_Estoque();

app.use("/api", lojaRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});