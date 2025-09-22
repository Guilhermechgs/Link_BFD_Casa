import { Barbearia } from "./barbearia.js";
import { Gui_novo, Gui_velho } from "./cliente.js";
import { barba, maquina, maquina_tesoura, tesoura } from "./cortes.js";
import { Gui_CLT } from "./funcionario.js";

console.log("--- Bem-vindo à Barbearia do Gui! ---");

const minhaBarbearia = new Barbearia("Barbearia do Gui");

minhaBarbearia.adicionarFuncionario(Gui_CLT);
minhaBarbearia.adicionarCliente(Gui_velho);
minhaBarbearia.adicionarCliente(Gui_novo);

minhaBarbearia.adicionarServico(barba);
minhaBarbearia.adicionarServico(maquina);
minhaBarbearia.adicionarServico(tesoura);
minhaBarbearia.adicionarServico(maquina_tesoura);

minhaBarbearia.realizarCorte(Gui_velho, barba, Gui_CLT);
minhaBarbearia.realizarCorte(Gui_novo, maquina_tesoura, Gui_CLT);

console.log("\n--- Simulação finalizada. ---");