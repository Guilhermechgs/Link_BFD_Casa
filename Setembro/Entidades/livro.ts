import { Autor } from "./autor";

export class Livro {
  public autores: Autor[] = [];

  constructor(
    public nome: string,
    public ano: number
  ) {}

}