let produtos = [
    {nome : "refrigerante", preco: 8, vendas : 150 },
    {nome : "frutas", preco: 5, vendas : 200 },
    {nome : "doces", preco: 3, vendas : 100 },
]

function vendatotal(produtos){
    let receitaTotal = 0;
    for (const produto of produtos) {
        receitaTotal += produto.vendas * produto.preco;
    }
    return receitaTotal;
}

function vendauniaria(produtos){
    return produtos.map(item => 
       `o produto ${item.nome} vendeu ${item.preco * item.vendas} em ${item.vendas} vendas!` 
    )
}

vendauniaria(produtos).forEach(msg => {
    console.log(msg)
});

console.log(`A receita total de vendas é: R$${vendatotal(produtos)}`);