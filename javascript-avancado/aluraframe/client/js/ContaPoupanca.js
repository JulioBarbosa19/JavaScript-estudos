class ContaPoupanca extends Conta {
    atualiza(taxa) {
        //  super(taxa);
        this._saldo = (taxa * 2) + this.saldo;

    }
}