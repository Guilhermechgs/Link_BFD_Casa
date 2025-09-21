import { Livro } from "./livro";

export class Usuario {
    public livrosEmprestados: Livro[] = [];

    constructor(public nome: string) {}

    pegarEmprestado(livro: Livro): boolean {
        if (livro.emprestar(this)) {
            this.livrosEmprestados.push(livro);
            return true;
        }
        return false;
    }

    devolverLivro(livro: Livro): boolean {
        const index = this.livrosEmprestados.findIndex(l => l === livro);
        if (index !== -1) {
            livro.devolver();
            this.livrosEmprestados.splice(index, 1);
            return true;
        }
        return false;
    }
}

export const usuarios: Usuario[] = [
    new Usuario("Guiga")
];