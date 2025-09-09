class Carro{
    constructor(modelo, marca, cor, ano, velocidade,){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano = ano
        this.velocidade = velocidade
    }

exibir(){
    console.log(`O carro ${this.modelo} é um ${this.marca} de cor ${this.cor} ano ${this.ano}.\nSua é velocidade ${this.velocidade}Kmh!`)
 }

 acelerar(valor){
    this.velocidade += valor
    console.log(`O ${this.modelo} acelerou ${this.velocidade}kmh!`)
 }
 frear(valor){
    this.velocidade -= valor
    console.log(`O ${this.modelo} freiou ${this.velocidade}kmh !`)
 }
 mostrarVelocidade(){
    console.log(`A velocidade do ${this.modelo} é ${this.velocidade}Khm!`)
 }
}
const carro = new Carro ("Porche911", "porche", "amarelo", "2012", 0, )
carro.exibir()
carro.acelerar(110)
carro.frear(10)
carro.mostrarVelocidade()