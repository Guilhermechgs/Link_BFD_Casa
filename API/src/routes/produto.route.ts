import { Router } from 'express';
import { AtualizarProduto, DeletarProduto, inserirProduto, retornarProduto } from '../controller/controller.produto.js';
import { Produto } from '../Entidades/produto.js';

const router = Router();

router.post("/inserirproduto", inserirProduto);

router.get("/retornarProduto", retornarProduto);

router.put("/atualizarproduto", AtualizarProduto);

router.delete("/deletarproduto/:nome", DeletarProduto);

export default router;