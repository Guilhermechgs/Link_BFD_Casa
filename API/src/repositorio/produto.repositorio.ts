import {db} from "../Config/Database.js"
import { Produto } from "../Entidades/produto.js";

export class Produto_Repositorio {
  constructor(private db: any) {}

  async insert(produto: Produto): Promise<void> {
    try {
      const query = 'INSERT INTO Produto (nome, valor) VALUES (?, ?)';
      await this.db.execute(query, [produto.nome, produto.valor]);
      console.log('Produto inserido com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir o produto:', error);
      throw error;
    }
  }
}
