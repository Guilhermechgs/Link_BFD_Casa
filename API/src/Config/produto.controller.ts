import type { Request, Response } from 'express';
import { db } from './Database.js';
import type { RowDataPacket } from 'mysql2';

// Define a type for our Product for type safety
interface Produto {
    id?: number;
    nome: string;
    preco: number;
}

export const getProdutos = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM produtos');
        res.status(200).json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching products' });
    }
};

export const createProduto = async (req: Request, res: Response) => {
    try {
        const { nome, preco } = req.body as Produto;
        if (!nome || preco == null) {
            return res.status(400).json({ message: 'Nome and Preco are required' });
        }
        const [result] = await db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco]);
        res.status(201).json({ message: 'Product created', data: { id: (result as any).insertId, nome, preco } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating product' });
    }
};