export class Categorias {
    #nombre


    constructor(nombre) {
        this.#nombre = nombre;
    }

// getter y setters


    get nombre() {
        return this.#nombre;
    }

    set nombre(value) {
        this.#nombre = value;
    }

// constructor
}