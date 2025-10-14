import readlineSync from "readline-sync";
import * as funcoes from "./funcoes_tarefas.js";
export let tarefas = ["cafe da manha", "almoco", "jantar"];

let opcao = ["Mostrar tarefas", "Adicionar tarefa", "Remover tarefa",];

let iniciar = readlineSync.keyInSelect(opcao, "Como posso ajudar?");
switch (iniciar) {
    case 0:
        funcoes.mostrar_tarefas();
        break;
        case 1:
            let novaTarefa = readlineSync.question("Digite a tarefa: ");
            funcoes.adicionar_tarefa(novaTarefa);
            console.log(funcoes.mostrar_tarefas())
            break;
            case 2:
                funcoes.remover_tarefa();
                console.log(funcoes.mostrar_tarefas())
                break;
}