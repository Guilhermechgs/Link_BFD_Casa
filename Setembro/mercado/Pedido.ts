import { Produto } from "./Produto.js";
import { TipoPagamento } from "./Pagamento.js";

export class ItemPedido {
    constructor(
        public produto: Produto,
        public quantidade: number
    ) {}
}

export class Pedido {
    public itens: ItemPedido[] = [];
    public tipoPagamento?: TipoPagamento;

    adicionarItem(item: ItemPedido): void {
        if (item.quantidade > item.produto.quantidade) {
            console.error(`Erro: Estoque insuficiente para ${item.produto.nome}. Disponível: ${item.produto.quantidade}, Pedido: ${item.quantidade}`);
            return;
        }
        this.itens.push(item);
        console.log(`${item.quantidade}x ${item.produto.nome} adicionado(s) ao pedido.`);
    }

    calcularTotal(): number {
        return this.itens.reduce((total, item) => total + (item.produto.preco * item.quantidade), 0);
    }

    finalizarPedido(tipoPagamento: TipoPagamento): void {
        this.tipoPagamento = tipoPagamento;
        const total = this.calcularTotal();

        console.log("\n--- Resumo do Pedido ---");
        this.itens.forEach(item => {
            console.log(`- ${item.produto.nome}: ${item.quantidade} x R$${item.produto.preco.toFixed(2)} = R$${(item.quantidade * item.produto.preco).toFixed(2)}`);
            item.produto.quantidade -= item.quantidade;
        });
        console.log(`\nTotal do Pedido: R$${total.toFixed(2)}`);
        console.log(`Forma de Pagamento: ${this.tipoPagamento}`);
        console.log("Pedido finalizado com sucesso!");
    }
}