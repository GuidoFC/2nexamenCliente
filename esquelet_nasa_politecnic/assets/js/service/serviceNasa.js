import {getDates} from "../dates.js"
import {Asteroide} from "../model/Asteroide.js"

export class ServiceNasa {
    #url = "https://theteacher.codiblau.com/public/exercicis/nasa";



    async getAsteroide(fechas) {

        // Crear un array de promesas de fetch para cada fecha
        const promesas = fechas.map(fecha =>
            fetch(this.#url + `?date=${fecha}`)
                .then(response => response.json())
                .then(data =>
                    data.map(r => new Asteroide(r.asteroid_name, r.asteroid_esperillos, r.asteroid_diameter_mm))
                )
        );

        // Ejecutar todas las promesas simultáneamente
        const resultados = await Promise.all(promesas);

        // Combinar los arrays de resultados en un solo array
        // return resultados.flat();
        const todos=  resultados.flat();
        console.log("que tengo aqui? ", todos)

    }
}

