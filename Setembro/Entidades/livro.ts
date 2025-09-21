import { Usuario } from "./usuario";
import { Autor, autorGuilherme } from "./autor";

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

export const livroTS = new Livro("Aprendendo TypeScript", 2025);
export const livroCozinha = new Livro("Cozinha Facil", 2024);

autorGuilherme.adicionarLivro(livroTS);
autorGuilherme.adicionarLivro(livroCozinha);