let readlinesync = require("readline-sync")
let num = Number (readlinesync.question("Informe um numero : "))
for (let i = num; i >= 0; i--){
    console.log(i)
}