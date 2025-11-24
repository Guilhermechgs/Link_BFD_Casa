import { ItemEstoque } from "./ItemEstoque";
import { Loja } from "./Loja";
import { Produto } from "./Produto";

export function Iniciar_Estoque(): void {

    const p1 = new Produto(1, "Notebook", 2500);
    const p2 = new Produto(2, "Mouse", 50);
    const p3 = new Produto(3, "Teclado", 100);


    const lojaCentro = new Loja(1, "Loja Centro");
    const lojaBairro = new Loja(2, "Loja Bairro");


    lojaCentro.adicionarAoEstoque(new ItemEstoque(p1, 10));
    lojaCentro.adicionarAoEstoque(new ItemEstoque(p2, 50));


    lojaBairro.adicionarAoEstoque(new ItemEstoque(p1, 5));
    lojaBairro.adicionarAoEstoque(new ItemEstoque(p3, 30));
}