import { Autor } from "./autor";

export class Livro {
  public autores: Autor[] = [];

  constructor(
    public nome: string,
    public ano: number
  ) {}

  public disponivel: boolean = true;

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      return true;
    }
    return false;
  }

  devolver() {
    this.disponivel = true;
  }
}