class conta_bancaria{
    constructor(nome,saldo){
        this.nome = nome 
        this.saldo = saldo
    }
    ver_saldo(){
        console.log("----Saldo atual----")
        console.log(`----${this.saldo}----`)
        console.log("--------------------")
    }
    debitar_saldo(valor){
        this.saldo -= valor
        console.log("---Debitação concluída---")
        console.log(`Seu novo saldo é\n---${this.saldo}R$----`)
        console.log(`-------------------------`)
    }

}

const bradesco = new conta_bancaria ("Gui",123456789)
bradesco.ver_saldo()
bradesco.debitar_saldo(1)