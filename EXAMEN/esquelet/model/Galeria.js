export class Galeria {
    #id
    #titol
    #url
    #data
    #categoria


    constructor(id, titol, url, data, categoria) {
        this.#id = id;
        this.#titol = titol;
        this.#url = url;
        this.#data = data;
        this.#categoria = categoria;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get titol() {
        return this.#titol;
    }

    set titol(value) {
        this.#titol = value;
    }

    get url() {
        return this.#url;
    }

    set url(value) {
        this.#url = value;
    }

    get data() {
        return this.#data;
    }

    set data(value) {
        this.#data = value;
    }

    get categoria() {
        return this.#categoria;
    }

    set categoria(value) {
        this.#categoria = value;
    }
}