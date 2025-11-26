import type { Request, Response } from 'express';
import { Produto_Repositorio } from '../repositorio/produto.repositorio.js';
import { Produto } from '../Entidades/produto.js';

const repos = new Produto_Repositorio();

export async function inserirProduto(req: Request, resp: Response){
  try{
    const {nome, preco} = req.body;
    const produto = new Produto(nome, preco);
    await repos.inserirdb(produto)

    return resp.send("cadastrado com sucesso")
  }
  catch(error:unknown){
    return resp.send({error});
  }
}

export async function retornarProduto(req: Request, resp: Response){
  try{
    const pessoas = await repos.retornardb();
    return resp.json(pessoas)
  }
  catch(error:unknown){
    return resp.send(error)
  }
}

export async function AtualizarProduto(req: Request, resp: Response){
  try{
    const { nomeAntigo, nome, preco } = req.body;

    const resultado = await repos.Atualizardb(nomeAntigo, nome, preco);

    return resp.json(resultado);
    
  } catch(error: unknown) {
    return resp.status(500).send(error);
  }
}
