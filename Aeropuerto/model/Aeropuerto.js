export class Aeropuerto{
    #codi
    #nom
    #latitud
    #longitud
    #ciutat


    constructor(codi, nom, latitud, longitud, ciutat) {
        this.#codi = codi;
        this.#nom = nom;
        this.#latitud = latitud;
        this.#longitud = longitud;
        this.#ciutat = ciutat;
    }

    get codi() {
        return this.#codi;
    }

    set codi(value) {
        this.#codi = value;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get latitud() {
        return this.#latitud;
    }

    set latitud(value) {
        this.#latitud = value;
    }

    get longitud() {
        return this.#longitud;
    }

    set longitud(value) {
        this.#longitud = value;
    }

    get ciutat() {
        return this.#ciutat;
    }

    set ciutat(value) {
        this.#ciutat = value;
    }
}