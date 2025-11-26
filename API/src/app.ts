import express, { type Express } from "express";
import router from "../src/routes/produto.route.js"

const app = express();
app.use(express.json());

app.use("/", router);

export default app;