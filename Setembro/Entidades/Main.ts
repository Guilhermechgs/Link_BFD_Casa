import { Usuario, usuarios } from "./usuario";
import * as readlineSync from 'readline-sync';

import { listarLivros, emprestarLivro, devolverLivro } from "./biblioteca";

console.log("Bem-vindo ao sistema da biblioteca!\n");

const nomesUsuarios = usuarios.map(u => u.nome);
const indexUsuario = readlineSync.keyInSelect(nomesUsuarios, "Quem esta usando o sistema?");

if (indexUsuario === -1) {
    console.log("Operacao cancelada. Ate logo!");
    process.exit();
}

const usuarioAtual = usuarios[indexUsuario];
console.log(`\nOla, ${usuarioAtual.nome}!`);

const opcoes = ["Listar Livros", "Emprestar Livro", "Devolver Livro"];

while (true) {
    const index = readlineSync.keyInSelect(opcoes, "O que voce gostaria de fazer?", { cancel: "Sair" });

    switch (index) {
        case 0:
            listarLivros();
            break;
        case 1:
            emprestarLivro(usuarioAtual);
            break;
        case 2:
            devolverLivro(usuarioAtual);
            break;
        default:
            console.log("\nObrigado por usar a biblioteca. Ate logo!");
            process.exit();
    }
}