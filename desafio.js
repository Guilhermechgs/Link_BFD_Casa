let readlineSync = require("readline-sync");
const iniciar = ["Ver estoque", "Fazer pdedido"]

let estoque = [
    {nome : "Playstation", quantidade : 500, preco : 100},
    {nome : "Xbox", quantidade : 400, preco : 200},
    {nome : "NintendoSwitch", quantidade : 600, preco : 300},
]

function mostrarEstoque(){
    estoque.forEach(item => {
        console.log(`Nome: ${item.nome}, Quantidade: ${item.quantidade}, Preço: ${item.preco}`);
    });
}

indexiniciar = readlineSync.keyInSelect(iniciar, "Como posso ajudar?")
if(indexiniciar == 0){
    mostrarEstoque()
}else if(indexiniciar == 1){
    const produto_escolhido = readlineSync.question("Gostaria de qual Produto?")
    const item_escolhido = estoque.find(item => item.nome.toLowerCase() == produto_escolhido.toLowerCase())
    if(item_escolhido){
        const quantidade_item = parseInt(readlineSync.question(`Quantos ${item_escolhido.nome} gostaria?`));
        if(quantidade_item > 0 && quantidade_item <= item_escolhido.quantidade){
            item_escolhido.quantidade -= quantidade_item;
            let valor_total = quantidade_item * item_escolhido.preco;
            console.log(`\nCompra de ${quantidade_item} ${item_escolhido.nome} por R$ ${valor_total} realizada com sucesso!`);
            console.log(`Novo estoque: ${item_escolhido.quantidade}`);
        } else {
            console.log(`\nDesculpe, quantidade inválida ou não disponível no momento.\nEstoque disponível: ${item_escolhido.quantidade}`);
        }
    } else {
        console.log("\nProduto não encontrado no estoque.");
    }
}