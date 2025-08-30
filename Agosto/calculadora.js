const readlinesync = require('readline-sync');
const operaçoes = ["Soma", "Subtraçao", "Multiplicaçao", "Divisao"];
let valor_1 = parseFloat(readlinesync.question("Digite o primeiro valor: "));
const index = readlinesync.keyInSelect(operaçoes, "Escolha a operaçao:");
let valor_2 = parseFloat(readlinesync.question("Digite o segundo valor: "));
switch (operaçoes[index]) {
    case "Soma":
        console.log(`Resultado: ${valor_1 + valor_2}`);
        break;
    case "Subtraçao":
        console.log(`Resultado: ${valor_1 - valor_2}`);
        break;
    case "Multiplicaçao":
        console.log(`Resultado: ${valor_1 * valor_2}`);
        break;
    case "Divisao":
        if (valor_2 !== 0) {
            console.log(`Resultado: ${valor_1 / valor_2}`);
        } else {
            console.log("Erro: Divisao por zero nao permitida.");
        }
        break;
    }