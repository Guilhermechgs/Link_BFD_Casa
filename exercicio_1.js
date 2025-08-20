const readlinesync = require(`readline-sync`)
let valor_real = parseFloat(readlinesync.question(`Digite o valor em reais: `))
let dolar = valor_real /0.19
const cambio = ["Dolar", "Euro", "Libra_esterlina"]
index_cambio = readlinesync.keyInSelect(cambio, `Escolha a moeda para conversao: `)
switch (index_cambio) {
    case 0:
        console.log(`O valor em Dolar é: ${(valor_real * 0.19).toFixed(2)}`)
        break
    case 1:
        console.log(`O valor em Euro é: ${(valor_real * 0.18).toFixed(2)}`)
        break
    case 2:
        console.log(`O valor em Libra Esterlina é: ${(valor_real * 0.15).toFixed(2)}`)
        break
}    