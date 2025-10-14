export class Corte{
    constructor(public nome: string, public preco: number){
    }

}

export const barba = new  Corte ("Barba", 20);
export const maquina = new Corte("Maquina", 30);
export const tesoura = new Corte ("Tesoura", 35);
export const maquina_tesoura = new Corte("Maquina_Tesoura", 45);