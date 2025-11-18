import type { Request, Response } from "express";
import { ProductRepository } from "../repositorio/produto.repositorio.js";

const repository = new ProductRepository();

export class ProductController {
    static create(req: Request, res: Response) {
  try {
    const { name, price } = req.body;

    if (!name || price === undefined) {
      return res.status(400).json({ error: "Nome e preço são obrigatórios" });
    }

    const product = repository.create({ name, price });
    return res.status(201).json(product);

  } catch (error) {
    console.error("Erro ao criar produto:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

static listAll(req: Request, res: Response) {
  try {
    const products = repository.findAll();
    return res.json(products);
  } catch (error) {
    console.error("Erro ao listar produtos:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

static filterByPrice(req: Request, res: Response) {
  try {
    const min = Number(req.query.min);

    if (isNaN(min)) {
      return res.status(400).json({ error: "Informe um valor numérico em ?min=" });
    }

    const products = repository.findByMinPrice(min);
    return res.json(products);
  } catch (error) {
    console.error("Erro ao filtrar produtos:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
}

}