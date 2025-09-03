class Carro{
    constructor(modelo, marca, cor, ano, velocidade,){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.velocidade = velocidade
    }

exibir(){
    console.log(`O carro ${this.modelo} é um ${this.marca} de cor ${this.cor} ano ${this.ano} \n sua é velocidade ${this.velocidade}`)
 }

 acelerar(valor){
    this.velocidade += valor
    console.log(`O ${this.modelo} acelerou ${this.velocidade}kmh!`)
 }
 frear(valor){
    this.velocidade -= valor
    console.log(`O ${this.modelo} freiou ${this.velocidade}kmh !`)
 }
}
const carro = new Carro ("Porche911", "porche", "amarelo", "2012", 0, )
carro.exibir()
carro.acelerar(110)
carro.frear(10)