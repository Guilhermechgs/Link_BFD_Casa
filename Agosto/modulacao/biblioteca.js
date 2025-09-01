import readlineSync from 'readline-sync';

import { livros } from './livros.js';

import { listarLivros, emprestarLivro } from './funcoes_biblioteca.js';

console.log("Bem-vindo ao sistema da biblioteca!");

listarLivros(livros);

const livroEscolhido = readlineSync.question("\nQual livro voce gostaria de emprestar? Digite o nome: ");

emprestarLivro(livros, livroEscolhido);

console.log("\n--- Lista de livros atualizada ---");
listarLivros(livros);
