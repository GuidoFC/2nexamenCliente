import {getDates} from "../dates.js"
import {Asteroide} from "../model/Asteroide.js"

export class Service {
    #url = "https://theteacher.codiblau.com/public/exercicis/nasa";



    async getAsteroide(fecha) {
        const response = await fetch(this.#url + `?date=${fecha}`);
        const data = await response.json();
        console.log(data)
        return data.map(r => new Asteroide(r.asteroid_name, r.asteroid_esperillos, r.asteroid_diameter_mm));
    }
}

