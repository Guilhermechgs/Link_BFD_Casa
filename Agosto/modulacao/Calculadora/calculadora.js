import { soma, subtracao, multiplicacao, divisao } from "./funcoes_calculadora.js";
import readlineSync from "readline-sync";

console.log("--- Calculadora Simples ---");

const num1 = readlineSync.questionFloat("Digite o primeiro numero: ");
const operador = readlineSync.question("Digite o operador (+, -, *, /): ");
const num2 = readlineSync.questionFloat("Digite o segundo numero: ");

let resultado;
try {
  switch (operador) {
      case "+":
        resultado = soma(num1, num2);
        break;
      case "-":
        resultado = subtracao(num1, num2);
        break;
      case "*":
        resultado = multiplicacao(num1, num2);
        break;
      case "/":
        resultado = divisao(num1, num2);
        break;
      default:
        throw new Error("Operador invalido. Por favor, use +, -, *, ou /.");
  }
  console.log(`O resultado de ${num1} ${operador} ${num2} é: ${resultado}`);
} catch (error) {
  console.error("Ocorreu um erro:", error.message);
}
