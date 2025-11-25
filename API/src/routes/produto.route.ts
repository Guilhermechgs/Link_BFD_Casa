import { Router } from 'express';
import { inserirProduto, retornarProduto } from '../controller/controller.produto.js';
import { Produto } from '../Entidades/produto.js';

const router = Router();

router.post("/inserirproduto", (req, res) => {
    const {nome, preco} = req.body
    const produto = new Produto(nome, preco)
    res.send("Produto cadastrado com sucesso.")
})

router.get("/retornarProduto", retornarProduto)

export default router;