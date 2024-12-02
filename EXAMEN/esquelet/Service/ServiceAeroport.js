import {Categorias} from "../model/Categorias.js";

export class ServiceAeroport{
    #url = "https://theteacher.codiblau.com/public/exercicis/galeria/categories-list";


     async getAllCategorias(){
         const response = await fetch(this.#url)
         const data = await response.json()

         return  data.map(r => {
            return  new Categorias(r)
         })

    }



}