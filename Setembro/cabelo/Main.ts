import { Barbearia } from "./barbearia.js";
import { Gui_novo, Gui_velho } from "./cliente.js";
import { barba, maquina, maquina_tesoura, tesoura } from "./cortes.js";
import { Gui_CLT } from "./funcionario.js";

console.log("--- Bem-vindo à Barbearia do Gui! ---");

const minhaBarbearia = new Barbearia("Barbearia do Gui");

// Adicionando funcionários e clientes
minhaBarbearia.adicionarFuncionario(Gui_CLT);
minhaBarbearia.adicionarCliente(Gui_velho);
minhaBarbearia.adicionarCliente(Gui_novo);

// Adicionando os serviços
minhaBarbearia.adicionarServico(barba);
minhaBarbearia.adicionarServico(maquina);
minhaBarbearia.adicionarServico(tesoura);
minhaBarbearia.adicionarServico(maquina_tesoura);

// Realizando cortes e aplicando descontos
minhaBarbearia.realizarCorte(Gui_velho, barba, Gui_CLT); // Cliente sem desconto
minhaBarbearia.realizarCorte(Gui_novo, maquina_tesoura, Gui_CLT);  // Cliente com desconto

console.log("\n--- Simulação finalizada. ---");