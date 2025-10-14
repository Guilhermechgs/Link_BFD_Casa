class conta {
    nome;
    saldo;
    constructor(nome, saldo) {
        this.nome = nome;
        this.saldo = saldo;
    }
    ver_saldo() {
        console.log(this.saldo);
    }
}
const gui = new conta(100, 200);
gui.ver_saldo();
export {};
//# sourceMappingURL=classe_conta.js.map