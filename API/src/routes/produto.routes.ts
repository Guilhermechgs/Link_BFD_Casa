import { Router } from 'express';
import { Produto_Repositorio } from '../repositorio/produto.repositorio.js';
import { ProdutoController } from '../controller/controller.produto.js';
import { db } from '../Config/Database.js';

const router = Router();

const produtoRepo = new Produto_Repositorio(db);
const produtoController = new ProdutoController(produtoRepo);

router.post('/Produto', (req, res) => produtoController.create(req, res));