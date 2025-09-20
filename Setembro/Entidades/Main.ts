import { Livro } from "./livro";
import { Autor } from "./autor";
import { Usuario } from "./usuario";
import * as readlineSync from 'readline-sync';

import { listarLivros, emprestarLivro, devolverLivro } from "./biblioteca";

const autorGuilherme = new Autor("Guilherme");

const livroTS = new Livro("Aprendendo TypeScript", 2025);
const livroCozinha = new Livro("Cozinha Facil", 2024);

autorGuilherme.adicionarLivro(livroTS);
autorGuilherme.adicionarLivro(livroCozinha);

const biblioteca: Livro[] = [livroTS, livroCozinha,];

const usuarios: Usuario[] = [
    new Usuario("Guiga")
];

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
            listarLivros(biblioteca);
            break;
        case 1:
            emprestarLivro(biblioteca, usuarioAtual);
            break;
        case 2:
            devolverLivro(usuarioAtual);
            break;
        default:
            console.log("\nObrigado por usar a biblioteca. Ate logo!");
            process.exit();
    }
}