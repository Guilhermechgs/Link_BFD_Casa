import {db} from "../Config/Database.js"
import { Produto } from "../Entidades/produto.js";

export class Produto_Repositorio {

  async inserirdb(produto: Produto){
    try {
      await db.execute(
        "insert into Produto(nome, valor) values (?, ?)",
      [produto.nome, produto.valor]
      )
    } catch (error:unknown){
      console.log(error)
    }
  }
 async retornardb(){
  try{
    const [rows] = await db.query("select * from Produto")
    return rows
  }
  catch (error){
    console.log("erro ao retornar produto")
    throw error
  }
 }

}
