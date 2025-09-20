import { Livro } from "./livro";
import * as readlineSync from 'readline-sync';

export function listarLivros(biblioteca: Livro[]) {
    console.log("\n--- Livros na Biblioteca ---");
    biblioteca.forEach(livro => {
        const status = livro.disponivel ? "Disponível" : "Emprestado";
        console.log(`- ${livro.nome} [${status}]`);
    });
    console.log("--------------------------\n");
}

export function emprestarLivro(biblioteca: Livro[]) {
    const nomesLivrosDisponiveis = biblioteca
        .filter(livro => livro.disponivel)
        .map(livro => livro.nome);

    if (nomesLivrosDisponiveis.length === 0) {
        console.log("\nNao ha livros disponiveis para emprestimo.");
        return;
    }

    const index = readlineSync.keyInSelect(nomesLivrosDisponiveis, "Qual livro voce quer emprestar?");
    if (index !== -1) {
        const livroEscolhido = biblioteca.find(livro => livro.nome === nomesLivrosDisponiveis[index]);
        if (livroEscolhido && livroEscolhido.emprestar()) {
            console.log(`\nVoce emprestou "${livroEscolhido.nome}" com sucesso!`);
        }
    } else {
        console.log("\nOperacao cancelada.");
    }
}

export function devolverLivro(biblioteca: Livro[]) {
    const nomesLivrosEmprestados = biblioteca
        .filter(livro => !livro.disponivel)
        .map(livro => livro.nome);

    if (nomesLivrosEmprestados.length === 0) {
        console.log("\nNao ha livros emprestados para devolver.");
        return;
    }

    const index = readlineSync.keyInSelect(nomesLivrosEmprestados, "Qual livro voce quer devolver?");
    if (index !== -1) {
        const livroEscolhido = biblioteca.find(livro => livro.nome === nomesLivrosEmprestados[index]);
        if (livroEscolhido) {
            livroEscolhido.devolver();
            console.log(`\nVoce devolveu "${livroEscolhido.nome}" com sucesso!`);
        }
    } else {
        console.log("\nOperacao cancelada.");
    }
}
