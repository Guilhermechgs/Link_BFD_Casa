import express, {Request, Response} from "express"
import produtoRouter from "./Produto.router";

const app = express()
app.use(express.json())

app.use("/api", produtoRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});