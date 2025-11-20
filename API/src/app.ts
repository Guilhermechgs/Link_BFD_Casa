import express from "express";
import produtoRouter from './routes/produto.routes.js'; // importe primeiro

const app = express();

app.use(express.json());

app.use('/api', produtoRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
