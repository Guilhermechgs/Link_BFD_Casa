const readlinesync = require('readline-sync');
let valor_produto = Number(readlinesync.question("Qual o valor do produto?"));
const desconto_15 = valor_produto * 0.15
const desconto_10 = valor_produto * 0.10
const pagamento = ["Dinheiro ou Pix", "Cartao de credito",];
const parcelas = ["0x", "2x", "3x", "4x", "5x", "6x",];
const juros = valor_produto * 0.10; 
indexpagamento = readlinesync.keyInSelect(pagamento,`Qual a forma de pagamento?`);
switch (pagamento[indexpagamento]){
    case "Dinheiro ou Pix":
        console.log(`O valor do produto é ${valor_produto - desconto_15}`);
        break;
    case "Cartao de credito":
        indexparcelas = readlinesync.keyInSelect(parcelas,"Em quantas vezes gostaria de parcelar?");
        let numero_parcelas = Number(parcelas[indexparcelas].replace("x", ""));
        let valor_parcelas = valor_produto + juros;
        let valor_total = numero_parcelas * valor_parcelas;;
                switch (parcelas[indexparcelas]){
            case "0x":
                console.log(`O valor do produto é ${valor_produto - desconto_10}`);
                break;
            case "2x":
                console.log(`O valor do produto é ${valor_produto}`);
                break;
            case "3x":         
                console.log(`O valor do produto é ${valor_total.toFixed(2)} (3 parcelas de ${valor_parcelas.toFixed(2)})`);
                break;
            case "4x":
                console.log(`O valor do produto é ${valor_total.toFixed(2)} (4 parcelas de ${valor_parcelas.toFixed(2)})`);
                break;
            case "5x":
                console.log(`O valor do produto é ${valor_total.toFixed(2)} (5 parcelas de ${valor_parcelas.toFixed(2)})`);
                break;
            case "6x":
                console.log(`O valor do produto é ${valor_total.toFixed(2)} (6 parcelas de ${valor_parcelas.toFixed(2)})`);
                break;            
        }
        break;
    }