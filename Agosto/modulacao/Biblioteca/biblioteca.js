import readlineSync from 'readline-sync';

import { livros } from './livros.js';

import { listarLivros, emprestarLivro, DevolverLivro } from './funcoes_biblioteca.js';

import { opcoes} from './livros.js';

console.log("Bem-vindo ao sistema da biblioteca!");

listarLivros(livros);

const escolher_opcao = readlineSync.keyInSelect(opcoes, "Como posso ajudar?")
switch (escolher_opcao){
    case 0:
        const livroEscolhido = readlineSync.question("\nQual livro voce gostaria de emprestar? Digite o nome: ");

emprestarLivro(livros, livroEscolhido);

console.log("\n--- Lista de livros atualizada ---");
listarLivros(livros);
        break
    case 1:
        const livroEscolhido2 = readlineSync.question("\nQual livro voce gostaria de devolver? Digite o nome: ");
DevolverLivro(livros, livroEscolhido2);
        
console.log("\n--- Lista de livros atualizada ---");
listarLivros(livros);
        break
}
