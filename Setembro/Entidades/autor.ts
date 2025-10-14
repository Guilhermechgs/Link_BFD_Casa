import type { Livro } from "./livro";

export class Autor {
  public livros: Livro[] = [];

  constructor(public nome: string) {
  }

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }
}

export const autorGuilherme = new Autor("Guilherme");
