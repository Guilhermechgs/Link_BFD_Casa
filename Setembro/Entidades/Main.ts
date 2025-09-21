import { autenticarOuSair } from "./usuario";
import { biblioteca } from "./biblioteca";


console.log("Bem-vindo ao sistema da biblioteca!\n");

const usuarioAtual = autenticarOuSair();

console.log(`\nOla, ${usuarioAtual.nome}!`);

biblioteca.iniciarLoop(usuarioAtual);