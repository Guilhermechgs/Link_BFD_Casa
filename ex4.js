let readlinesync = require('readline-sync');
let salarioatual = Number(readlinesync.question("Valor do salario atual :"));
let reajuste = salarioatual * 0.03
let novosalario = salarioatual + reajuste
if (novosalario <= 105000)
    console.log(`O novo salário é ${novosalario + 200}`);
else
console.log(`O novo salário é: ${novosalario}`);