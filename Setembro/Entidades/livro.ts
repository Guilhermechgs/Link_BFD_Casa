import { Autor } from "./autor";
import { Usuario } from "./usuario";

export class Livro {
  public autores: Autor[] = [];

  constructor(
    public nome: string,
    public ano: number
  ) {}

  public disponivel: boolean = true;
  public emprestadoPor: Usuario | null = null;

  emprestar(usuario: Usuario): boolean {
    if (this.disponivel) {
      this.disponivel = false;
      this.emprestadoPor = usuario;
      return true;
    }
    return false;
  }

  devolver() {
    this.disponivel = true;
    this.emprestadoPor = null;
  }
}