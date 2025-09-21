import { Livro, livroCozinha, livroTS } from "./livro";
import * as readlineSync from 'readline-sync';
import { Usuario } from "./usuario";

export const biblioteca: Livro[] = [livroTS, livroCozinha];


export function listarLivros() {
    console.log("\n--- Livros na Biblioteca ---");
    biblioteca.forEach(livro => {
        const status = livro.disponivel ? "Disponível" : `Emprestado para: ${livro.emprestadoPor?.nome}`;
        console.log(`- ${livro.nome} [${status}]`);
    });
    console.log("--------------------------\n");
}

export function emprestarLivro(usuario: Usuario) {
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
        if (livroEscolhido && usuario.pegarEmprestado(livroEscolhido)) {
            console.log(`\nVoce emprestou "${livroEscolhido.nome}" com sucesso!`);
        }
    } else {
        console.log("\nOperacao cancelada.");
    }
}

export function devolverLivro(usuario: Usuario) {
    const nomesLivrosEmprestados = usuario.livrosEmprestados.map(livro => livro.nome);

    if (nomesLivrosEmprestados.length === 0) {
        console.log("\nNao ha livros emprestados para devolver.");
        return;
    }

    const index = readlineSync.keyInSelect(nomesLivrosEmprestados, "Qual livro voce quer devolver?");
    if (index !== -1) {
        const livroEscolhido = usuario.livrosEmprestados[index];
        if (livroEscolhido && usuario.devolverLivro(livroEscolhido)) {
            console.log(`\nVoce devolveu "${livroEscolhido.nome}" com sucesso!`);
        }
    } else {
        console.log("\nOperacao cancelada.");
    }
}
