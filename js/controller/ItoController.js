class ItoController {
    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputColor = $('#color');
        this._inputBrand = $('#brand');
        this._inputHinban = $('#hinban');
        this._itoTable = $('.ito-table');

        this._itoList = new ItoList();
        this._itoListView = new ItoListView($('._itoTable'));
        // イベントの実行を監視する      ダブルクリックを監視
        this._itoTable.addEventListener('dblclick', function(event) {
            // ダブルクリックされたら実行する処理
            // イベント=>ターゲット=>ペアレントノード
            let clickRow = event.target.parentNode;
            
            // 糸削除の処理の呼び出し
            this.deleteIto(clickRow);
            
            
        }.bind(this));
    }

    // 糸を追加する
    addIto(event) {

        event.preventDefault();

        // 入力チェック
        // true:追加の処理続行
        // false:追加の処理を中断
        if(this._isValidInput()) {

         

            // 値を保存する
            let ito = new Ito(
            this._inputColor.value,
            this._inputBrand.value,
            this._inputHinban.value
            );

            this._itoList.addItem(ito);

            console.log(this._itoList);

            this._itoListView._templateDocument(ito);

            this._formSetDefault();
        }
    }

    // 糸を全て削除する
    clearIto(event) {
        event.preventDefault();

        this._itoList.clear();

        this._itoListView.clear();

        this._formSetDefault();
    }

    // 糸を１つ削除する
    deleteIto(clickRow) {

        // クリックされた行から糸オブジェクトを作成する
        let sakujoSuruIto = new Ito(
            // 色セルのデータ
            clickRow.children[0].textContent,
            // メーカーセルのデータ
            clickRow.children[1].textContent,
            // 品番セルのデータ
            clickRow.children[2].textContent
        );

        // 糸リストから消す
        this._itoList.selectClear(sakujoSuruIto);
        
        // 画面から消す
        clickRow.remove();
    }

    // 入力欄を初期値に戻す処理
    _formSetDefault() {

        // 色を黒にする
        this._inputColor.value = '#000000';
        
        // メーカー名を空文字にする
        this._inputBrand.value = '';
        
        // 品番を空文字にする
        this._inputHinban.value = '';
    }
    // 糸のバリデーションをする
    // 入力が不正の場合 = false, そうでない場合 = true
    // trueになる条件:メーカー名&&品番が空文字ではない
    // falseになる条件:メーカー名||品番が空文字
    _isValidInput() {
        // 結果
        let valid = false;

        // メーカー名が空文字ではない
        let brandN = this._inputBrand.value == '';

        // 品番が空文字ではない
        let hinbanN = this._inputHinban.value == '';

        valid = !brandN && !hinbanN;

        // 結果を教える
        return valid;
    }
}