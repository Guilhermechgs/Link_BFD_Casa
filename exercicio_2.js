const readlinesync = require('readline-sync')

let salario_anual = parseFloat(readlinesync.question('Digite o valor do salário anual: '))
let tempo_servico = parseFloat(readlinesync.question('Digite o tempo de serviço em anos: '))
let desempenho = parseFloat(readlinesync.question('Digite o desempenho do funcionário (0 a 10): '))

let bonus = 0

if (tempo_servico > 5) {
    bonus = 0.15
} else if (tempo_servico >= 3 ) {
    bonus = 0.10
} else if (tempo_servico >= 2) {
    bonus = 0.05
}
if (desempenho >=8 && desempenho <= 10 ) {
    bonus += 0.50
} else if (desempenho >= 5 && desempenho < 8) {
    bonus += 0.20
} else {
}
let novo_salario = salario_anual + (salario_anual * bonus)

console.log(`Novo salário: R$ ${novo_salario.toFixed(2)}`)