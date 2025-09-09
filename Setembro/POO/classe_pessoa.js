export class Pessoa{
    constructor(nome,idade,){
        this.nome = nome
        this.idade = idade
    }
       exibir(){
        console.log(`A pessoa ${this.nome} tem ${this.idade} anos`)
    }
}