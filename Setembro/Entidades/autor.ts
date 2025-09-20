import { Livro } from "./livro";

export class Autor {
  public livros: Livro[] = [];

  constructor(public nome: string) {
  }

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }
}
