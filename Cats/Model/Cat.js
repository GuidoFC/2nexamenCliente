export class Cat{
    #id
    #nombreArchivo
    #url


    constructor(id, nombreArchivo, url) {
        this.#id = id;
        this.#nombreArchivo = nombreArchivo;
        this.#url = url;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get nombreArchivo() {
        return this.#nombreArchivo;
    }

    set nombreArchivo(value) {
        this.#nombreArchivo = value;
    }

    get url() {
        return this.#url;
    }

    set url(value) {
        this.#url = value;
    }
}