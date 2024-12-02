import {Categorias} from "../model/Categorias.js";
import {Galeria} from "../model/Galeria.js";

export class ServiceArte {
    #url = "https://theteacher.codiblau.com/public/exercicis/galeria/categories-list";
    #urlListar = "https://theteacher.codiblau.com/public/exercicis/galeria/categories-list";


     async getAllCategorias(){
         const response = await fetch(this.#url)
         const data = await response.json()

         return  data.map(r => {
            return  new Categorias(r)
         })

    }

    async listaObrasArter(){
        const response = await fetch(this.#urlListar)
        const data = await response.json()

        return  data

    }



}