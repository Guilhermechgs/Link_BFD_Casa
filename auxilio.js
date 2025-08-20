const readlinesync = require('readline-sync');
let auxilio1000_00 = 1000.00;
let auxilio500_00 = 500.00;
let auxilio100 = 100.00;
const salario_mensal = Number(readlinesync.question("Qual o valor do seu salario mensal?"));
const idade = Number(readlinesync.question("Qual a sua idade?"));
if (salario_mensal <= 1000.00 && idade > 18)
    console.log(`Seu auxilio será: ${auxilio1000_00} \nSeu novo salário será: ${salario_mensal + auxilio1000_00}`);
else if (salario_mensal > 1000.00 &&  salario_mensal <= 2000.00)
    console.log(`Seu auxilio será: ${auxilio500_00} \nSeu novo salário será: ${salario_mensal + auxilio500_00}`);
else if (salario_mensal >2000.00 && salario_mensal <= 3000.00)
    console.log(`Seu auxiio será: ${auxilio100} \n Seu novo salario será ${salario_mensal + auxilio100}`);
else if (salario_mensal > 3000.00)
    console.log(`Você não é elegível para o axílio salarial \n Seu salário mensal permance ${salario_mensal}`)