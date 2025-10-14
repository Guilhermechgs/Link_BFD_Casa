let produto = [
    {nome : "dove", preco : 80},
    {nome : "rexona", preco : 100},
    {nome : "malbec", preco : 150}
];

let produto_caro = null;
let maior_preco = 0;

for (let i = 0; i < produto.length; i++) {
    if (produto[i].preco > maior_preco) {
        maior_preco = produto[i].preco;
        produto_caro = produto[i];
    }
}

console.log(`o produto mais caro é ${produto_caro.nome} com valor de ${produto_caro.preco}`)