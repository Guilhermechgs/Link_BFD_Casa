import { Cliente } from "./cliente.js";
import { Corte } from "./cortes.js";
import { Funcionario } from "./funcionario.js";

export class Barbearia {
    public funcionarios: Funcionario[] = [];
    public clientes: Cliente[] = [];
    public servicos: Corte[] = [];

    constructor(public nome: string) {}

    adicionarFuncionario(funcionario: Funcionario) {
        this.funcionarios.push(funcionario);
    }

    adicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    adicionarServico(servico: Corte) {
        this.servicos.push(servico);
    }

    realizarCorte(cliente: Cliente, servico: Corte, funcionario: Funcionario) {
        console.log(`\nIniciando atendimento para ${cliente.nome} com ${funcionario.nome}...`);

        let precoFinal = servico.preco;

        if (cliente.descontoDisponivel()) {
            const desconto = servico.preco * 0.10;
            precoFinal -= desconto;
            console.log(`Aplicado desconto de 10% (R$${desconto.toFixed(2)}) para cliente menor de 18 anos.`);
        }

        console.log(`Serviço: ${servico.nome} - Preço Final: R$${precoFinal.toFixed(2)}`);
    }
}