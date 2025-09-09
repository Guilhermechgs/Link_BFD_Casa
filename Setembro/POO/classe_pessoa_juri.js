import {Pessoa} from './classe_pessoa.js';

class Pessoa_juri extends Pessoa{
    #cnpj
    constructor(nome,idade,cnpj){
        super(nome,idade)
        this.#cnpj = cnpj
    }
    ver_dados(){
        console.log(this.#cnpj)
    }
}

const pessoa = new Pessoa_juri ("Gui", 24, 123456789)

pessoa.exibir()
pessoa.ver_dados()