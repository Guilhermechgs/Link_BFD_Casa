import express, {Request, Response} from "express"

const app = express()
app.use(express.json())

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});