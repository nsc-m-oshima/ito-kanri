class Ito {
    constructor(color, brand, number) {
        this._color = color;
        this._brand = brand;
        this._hinban = number;
    }

    get color() {
        return this._color
    }

    get brand() {
        return this._brand
    }

    get number() {
        return this._hinban
    }
}