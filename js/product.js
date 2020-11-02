class Product {
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get system() {
        return this._system;
    }

    set system(value) {
        this._system = value;
    }

    get number() {
        return this._number;
    }

    set number(value) {
        this._number = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get img() {
        return this._img;
    }

    set img(value) {
        this._img = value;
    }

    constructor(name, system, number, price, img) {
        this._name = name;
        this._system = system;
        this._number = number;
        this._price = price;
        this._img = img;
    }

    edit(name, system, number, price, img) {
        this.name = name;
        this.system = system;
        this.number = number;
        this.price = price;
        this.img = img;
    }

    getHtml() {
        let html = `<td>${this.name}</td>
                    <td>${this.system}</td>
                    <td>${this.number}</td>
                    <td>${this.price}</td>
                    <td><img width="100px" height="100px" src="${this.img}"></td>`;
        return html;
    }
}
