import { Router } from 'express';
import { createProduto, getProdutos } from './produto.controller.js';

const router = Router();

// Route to get all products
router.get('/', getProdutos);

// Route to create a new product
router.post('/', createProduto);

export { router as produtoRouter };