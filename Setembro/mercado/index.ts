import { Pedido, ItemPedido } from "./Pedido.js";
import { Produto } from "./Produto.js";
import { TipoPagamento } from "./Pagamento.js";

const arroz = new Produto("Arroz Tipo 1", 25.50, 100);
const feijao = new Produto("Feijão Carioca", 8.90, 150);
const macarrao = new Produto("Macarrão Espaguete", 4.20, 200);

console.log("--- Estoque Inicial ---");
console.log(`${arroz.nome}: ${arroz.quantidade}`);
console.log(`${feijao.nome}: ${feijao.quantidade}`);
console.log(`${macarrao.nome}: ${macarrao.quantidade}\n`);

const meuPedido = new Pedido();

meuPedido.adicionarItem(new ItemPedido(arroz, 2));
meuPedido.adicionarItem(new ItemPedido(feijao, 3));
meuPedido.adicionarItem(new ItemPedido(macarrao, 5));

meuPedido.finalizarPedido(TipoPagamento.Cartao);

console.log("\n--- Estoque Final ---");
console.log(`${arroz.nome}: ${arroz.quantidade}`);
console.log(`${feijao.nome}: ${feijao.quantidade}`);
console.log(`${macarrao.nome}: ${macarrao.quantidade}`);