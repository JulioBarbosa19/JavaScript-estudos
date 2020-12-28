class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');



        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), new NegociacoesView($('#negociacoesView')), 'adiciona', 'esvazia'
        )






        //this._listaNegociacoes = new ListaNegociacoes(model => {
        // this._negociacoesView.update(model);
        //  }); // o escopo de uma arrow function é léxico




        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')), 'texto'
        );
    }

    adiciona(event) {
        event.preventDefault();

        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // );

        // let data = new DateHelper().textoParaData(this._inputData.value);



        this._listaNegociacoes.adiciona(this._criaNegociacao());
        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociação adicionada com Sucesso!!!";



        this._limpaFormulario();

    }

    apaga() {
        this._listaNegociacoes.esvazia();
        // this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = "Negociações apagadas com sucesso";


    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() { // este método só pode ser chamado pela classe negociacaocontroller.js 
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }
}