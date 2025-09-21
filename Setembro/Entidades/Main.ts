import { identificarUsuario } from "./usuario";
import { iniciarLoop } from "./biblioteca";


console.log("Bem-vindo ao sistema da biblioteca!\n");

const usuarioAtual = identificarUsuario();

if (!usuarioAtual) {
    console.log("Operacao cancelada. Ate logo!");
    process.exit();
}

console.log(`\nOla, ${usuarioAtual.nome}!`);

iniciarLoop(usuarioAtual);