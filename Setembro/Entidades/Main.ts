import { Livro } from "./livro";
import { Autor } from "./autor";

const autorGuilherme = new Autor("Guilherme");
const meuLivro = new Livro("Aprendendo TypeScript", 2025);
const outroLivvro = new Livro("Cozinha facil", 2025);

autorGuilherme.adicionarLivro(meuLivro);
autorGuilherme.adicionarLivro(outroLivvro);

console.log(autorGuilherme);
