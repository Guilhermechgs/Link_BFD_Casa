export class Cliente{
    constructor(public nome: string, public idade: number){
    }

    descontoDisponivel(): boolean{
        const idadeParaDesconto = 18;
        return this.idade < idadeParaDesconto;
    }
}

export const Gui_velho = new Cliente("Gui_Velho", 24)
export const Gui_novo = new Cliente("Gui_Novo", 17)