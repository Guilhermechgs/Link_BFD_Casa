import { Livro, livroCozinha, livroTS } from "./livro";
import * as readlineSync from 'readline-sync';
import { Usuario } from "./usuario";

class Biblioteca {
    private livros: Livro[] = [];
    private opcoes = ["Listar Livros", "Emprestar Livro", "Devolver Livro"];

    constructor() {
        this.livros.push(livroTS, livroCozinha);
    }

    listarLivros() {
        console.log("\n--- Livros na Biblioteca ---");
        this.livros.forEach(livro => {
            const status = livro.disponivel ? "Disponível" : `Emprestado para: ${livro.emprestadoPor?.nome}`;
            console.log(`- ${livro.nome} [${status}]`);
        });
        console.log("--------------------------\n");
    }

    emprestarLivro(usuario: Usuario) {
        const nomesLivrosDisponiveis = this.livros
            .filter(livro => livro.disponivel)
            .map(livro => livro.nome);

        if (nomesLivrosDisponiveis.length === 0) {
            console.log("\nNao ha livros disponiveis para emprestimo.");
            return;
        }

        const index = readlineSync.keyInSelect(nomesLivrosDisponiveis, "Qual livro voce quer emprestar?");
        if (index !== -1) {
            const livroEscolhido = this.livros.find(livro => livro.nome === nomesLivrosDisponiveis[index]);
            if (livroEscolhido && usuario.pegarEmprestado(livroEscolhido)) {
                console.log(`\nVoce emprestou "${livroEscolhido.nome}" com sucesso!`);
            }
        } else {
            console.log("\nOperacao cancelada.");
        }
    }

    devolverLivro(usuario: Usuario) {
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

    iniciarLoop(usuario: Usuario) {
        while (true) {
            const index = readlineSync.keyInSelect(this.opcoes, "O que voce gostaria de fazer?", { cancel: "Sair" });

            switch (index) {
                case 0:
                    this.listarLivros();
                    break;
                case 1:
                    this.emprestarLivro(usuario);
                    break;
                case 2:
                    this.devolverLivro(usuario);
                    break;
                default:
                    console.log("\nObrigado por usar a biblioteca. Ate logo!");
                    process.exit();
            }
        }
    }
}

export const biblioteca = new Biblioteca();
