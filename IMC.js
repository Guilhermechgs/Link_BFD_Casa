let readlinesync = require('readline-sync');
let Alt = Number(readlinesync.question('Altura em metros: '));
let Pso = Number(readlinesync.question('Peso em kg: '));
let IMC= (Pso/ (Alt ** 2))
if (IMC<18.5)
 console.log("Magreza")
 else if (IMC>=18.5 && IMC<=24.9)
 console.log("Saudável")
 else if (IMC>=25.0 && IMC<=29.9)
 console.log("Sobrepeso")
 else if (IMC>=30.0 && IMC<=34.9)
 console.log("Obs grau 1")
 else if (IMC>=35.0 && IMC<=39.9)
 console.log("Obs grau 2")
 else
 console.log("Obs grau 3")