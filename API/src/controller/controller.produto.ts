import type { Request, Response } from 'express';
import { Produto_Repositorio } from '../repositorio/produto.repositorio.js';
import { Produto } from '../Entidades/produto.js';

export class ProdutoController {
  constructor(private produtoRepo: Produto_Repositorio) {}

  async create(req: Request, res: Response) {
    try {
      const { nome, valor } = req.body;

      const produto = new Produto(nome, Number(valor));

      await this.produtoRepo.insert(produto);

      return res.status(201).json({ message: 'Produto criado com sucesso!' });
    } catch (error) {
      console.error('Erro no controller:', error);
      return res.status(500).json({ message: 'Erro ao criar o produto.' });
    }
  }
}
