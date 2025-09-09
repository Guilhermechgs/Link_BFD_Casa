import {Pessoa} from './classe_pessoa.js';

class Pessoa_fis extends Pessoa{
    #cpf
    constructor(nome,idade,cpf){
        super(nome,idade)
        this.#cpf = cpf
    }
    exibir(){
        console.log(`A pessoa ${this.nome} tem ${this.idade} anos \n${this.#cpf}`)
    }
}

const pessoa = new Pessoa_fis("Gui", 24, 987654321)
pessoa.exibir()