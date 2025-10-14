import { Router, Request, Response } from "express";
import { Produto } from "../Entidades/Produto";

const router = Router()

const estoque: Produto [] = []

estoque.push(new Produto(1, "Notebook", 2500));
estoque.push(new Produto(2, "Mouse", 50));
estoque.push(new Produto(3, "Teclado", 100));

router.get("/estoque", (req: Request, res: Response) => {
  res.status(200).json(estoque);
});

export default router;