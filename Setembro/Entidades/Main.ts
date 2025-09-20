import { Livro } from "./livro";
import { Autor } from "./autor";

const autorGuilherme = new Autor("Guilherme");
const meuLivro = new Livro("Aprendendo TypeScript", 2025);
const outroLivvro = new Livro("Cozinha facil", 2025);

autorGuilherme.adicionarLivro(meuLivro);
autorGuilherme.adicionarLivro(outroLivvro);

const nomesDosLivros = autorGuilherme.livros.map(livro => livro.nome).join(', ');
console.log(`O autor ${autorGuilherme.nome} escreveu os livros: ${nomesDosLivros}`);