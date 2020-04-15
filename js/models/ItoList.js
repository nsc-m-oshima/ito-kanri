class ItoList {
    constructor() {
        this._list = []
    }

    get list() {
        return [].concat(this._list);
    }

    // 糸のリストの最後に新しく追加する
    addItem(ito) {
        this._list.push(ito);
    }

    // 糸のリストのクリア
    clear() {
        this._list = [];
    }
}