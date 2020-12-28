class View {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template() {
        throw new Error("O método template deve ser impleentado");
    }
    update(model) {
        this._elemento.innerHTML = this.template(model); // innerHTML converte a string em elementos do DOM.
    }
}