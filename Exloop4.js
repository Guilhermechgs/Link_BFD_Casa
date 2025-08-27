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

produtos.forEach(item => {
    console.log(`O produto ${item.nome} vendeu ${item.preco} reais por ${item.vendas} unidades`)
})
console.log(`A receita total de vendas é: R$${vendatotal(produtos)}`);
