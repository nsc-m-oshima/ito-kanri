class ItoController {
    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputColor = $('#color');
        this._inputBrand = $('#brand');
        this._inputHinban = $('#hinban');

        this._itoList = new ItoList();
        this._itoListView = new ItoListView($('.ito-table'));
    }

    addIto(event) {

        event.preventDefault();

        // 値を保存する
        let ito = new Ito(
        this._inputColor.value,
        this._inputBrand.value,
        this._inputHinban.value
        );

        this._itoList.addItem(ito);

        console.log(this._itoList);

        this._itoListView._templateDocument(ito);
    }

}