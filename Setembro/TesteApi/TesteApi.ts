import express , {Request, Response} from "express";
import { Produto } from "../mercado/Produto";

const Paodequeijo = new Produto("Pao de queijo", 5, 200)
const coca_cola = new Produto("Coca cola", 3, 150)

const Estoque = []

Estoque.push(Paodequeijo)
Estoque.push(coca_cola)

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json(Estoque);
});
