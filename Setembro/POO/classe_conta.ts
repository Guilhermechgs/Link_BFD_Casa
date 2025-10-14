class conta{
    nome : number
    saldo : number
    constructor(nome : number, saldo : number){
        this.nome = nome
        this.saldo = saldo
    }
    ver_saldo(){
        console.log(this.saldo)
    }
}

const gui = new conta(100, 200)
gui.ver_saldo()