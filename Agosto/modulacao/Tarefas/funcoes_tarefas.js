import { tarefas } from "./tarefas.js";
import readlineSync from "readline-sync";

export function mostrar_tarefas(){
    console.log("\n--- Suas Tarefas ---");
    if (tarefas.length === 0) {
        console.log("Você não tem tarefas pendentes.");
    } else {
        tarefas.forEach((tarefa, index) => {
            console.log(`${index}: ${tarefa}`);
        });
    }
    console.log("--------------------\n");
}

export function adicionar_tarefa(novaTarefa){
    if (novaTarefa && novaTarefa.trim() !== "") {
        tarefas.push(novaTarefa.trim());
        console.log("\n Tarefa adicionada com sucesso!\n");
    } else {
        console.log("\n Operacao cancelada. Nenhuma tarefa foi digitada.\n");
    }
}

export function remover_tarefa(){
    mostrar_tarefas();
    const indice = readlineSync.questionInt("Digite o NUMERO da tarefa que deseja remover: ");
    if (indice >= 0 && indice < tarefas.length) {
        const removida = tarefas.splice(indice, 1);
        console.log(`\n Tarefa "${removida[0]}" removida com sucesso!\n`);
    } else {
        console.log("\n indice inválido. Nenhuma tarefa foi removida.\n");
    }
}