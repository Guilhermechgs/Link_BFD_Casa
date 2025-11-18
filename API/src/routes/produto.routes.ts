import { Router } from "express";
import { ProductController } from "../controller/controller.produto.js";

const router = Router();

router.post("/products", ProductController.create);
router.get("/products", ProductController.listAll);
router.get("/products/filter", ProductController.filterByPrice);

export default router;
