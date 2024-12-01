export class Asteroide {
    #nom
    #peligroso
    #diametro


    constructor(nom, peligroso, diametro) {
        this.#nom = nom;
        this.#peligroso = peligroso;
        this.#diametro = diametro;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get peligroso() {
        return this.#peligroso;
    }

    set peligroso(value) {
        this.#peligroso = value;
    }

    get diametro() {
        return this.#diametro;
    }

    set diametro(value) {
        this.#diametro = value;
    }
}