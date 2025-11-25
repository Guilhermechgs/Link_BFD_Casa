import { Router, Request, Response } from "express";
import { Loja } from "../Entidades/Loja";

const router = Router()

router.get("/lojas", (req: Request, res: Response) => {
  res.status(200).json(Loja.todasAsLojas);
});

router.get("/lojas/:id/estoque", (req: Request, res: Response) => {
  const lojaId = parseInt(req.params.id);
  const loja = Loja.todasAsLojas.find(l => l.id === lojaId);

  if (loja) {
    res.status(200).json(loja.estoque);
  } else {
    res.status(404).json({ message: "Loja não encontrada." });
  }
});

export default router;