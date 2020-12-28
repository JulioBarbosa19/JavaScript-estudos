class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];

    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);

    }
    get negociacoes() {
        return [].concat(this._negociacoes); // programação defensiva

    }
    esvazia() {
        this._negociacoes = [];

    }
}