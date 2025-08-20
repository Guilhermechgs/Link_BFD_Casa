let readlinesync = require('readline-sync')
let nota1 = Number(readlinesync.question('Valor nota1 :'));
let nota2 = Number(readlinesync.question('Valor nota2 :'));
let nota3 = Number(readlinesync.question('Valor nota3 :'));
let media = (nota1+nota2+nota3)/3
media = media.toFixed(1)
if (media >=8)
    console.log('Aprovado')
else if (media >=5)
    console.log('Recuperação')
else
    console.log('Reprovado')
const mensagem = `Sua média final é ${media}`
console.log(mensagem)