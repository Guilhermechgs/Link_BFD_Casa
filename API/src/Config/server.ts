import express, { type Request, type Response } from 'express';
import { produtoRouter } from './produto.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use the product routes for any requests to /api/produtos
app.use('/api/produtos', produtoRouter);

// A simple root route to check if the server is running
app.get('/', (req: Request, res: Response) => {
    res.send('API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});