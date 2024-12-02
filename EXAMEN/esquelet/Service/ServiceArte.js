import {Categorias} from "../model/Categorias.js";
import {Galeria} from "../model/Galeria.js";

export class ServiceArte {
    #url = "https://theteacher.codiblau.com/public/exercicis/galeria/categories-list";
    #urlListar = "https://theteacher.codiblau.com/public/exercicis/galeria/list";
    #urlGurarda = "https://theteacher.codiblau.com/public/exercicis/galeria/save";



     async getAllCategorias(){
         const response = await fetch(this.#url)
         const data = await response.json()

         return  data.map(r => {
            return  new Categorias(r)
         })

    }

    async listaObrasArter(){
        const response2 = await fetch(this.#urlListar)
        const data2 = await response2.json()

        return  data2.map(r => {
            return new Galeria(r.iditem, r.titol, r.url, r.data, r.categoria)
        })

    }

    async guardarFoto(){
        const response2 = await fetch(this.#urlGurarda, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data2 = await response2.json()

        return  data2.map(r => {
            return new Galeria(r.iditem, r.titol, r.url, r.data, r.categoria)
        })

    }



}