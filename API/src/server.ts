import express from "express";
import productRoutes from "./routes/produto.routes.js";

const app = express();

app.use(express.json());
app.use(productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
