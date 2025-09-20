import { Livro } from "./livro";
import { Autor } from "./autor";
import * as readlineSync from 'readline-sync';

import { listarLivros, emprestarLivro, devolverLivro } from "./biblioteca";

const autorGuilherme = new Autor("Guilherme");
const autorRick = new Autor("Rick Riordan");
const autorJK = new Autor("J.K. Rowling");

const livroTS = new Livro("Aprendendo TypeScript", 2025);
const livroCozinha = new Livro("Cozinha Facil", 2024);
const livroPercy = new Livro("Percy Jackson", 2005);
const livroHarry = new Livro("Harry Potter", 1997);

autorGuilherme.adicionarLivro(livroTS);
autorGuilherme.adicionarLivro(livroCozinha);
autorRick.adicionarLivro(livroPercy);
autorJK.adicionarLivro(livroHarry);


const biblioteca: Livro[] = [livroTS, livroCozinha, livroPercy, livroHarry];

console.log("Bem-vindo ao sistema da biblioteca!");

const opcoes = ["Listar Livros", "Emprestar Livro", "Devolver Livro"];

while (true) {
    const index = readlineSync.keyInSelect(opcoes, "O que voce gostaria de fazer?", { cancel: "Sair" });

    switch (index) {
        case 0:
            listarLivros(biblioteca);
            break;
        case 1:
            emprestarLivro(biblioteca);
            break;
        case 2:
            devolverLivro(biblioteca);
            break;
        default:
            console.log("\nObrigado por usar a biblioteca. Ate logo!");
            process.exit();
    }
}