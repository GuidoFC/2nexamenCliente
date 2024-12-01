import {Aeropuerto} from "../model/Aeropuerto.js";

export class ServiceAeroport{
    #url = "https://theteacher.codiblau.com/public/exercicis/airports";
    async getAllAeroport(){
        const listaAeropuerto = [];
        const respuesta = await fetch(this.#url)
        const data =  await respuesta.json();

        data.map(r => {
            const codi = r.code
            const nom = r.name
            const lati = r.lat
            const long = r.lon
            const ciutat = r.city
            listaAeropuerto.push(new Aeropuerto(codi, nom,lati,long, ciutat))

        })
        return listaAeropuerto;
    }

    searchAeroport(inputIntroducido, listaAeropuerto){
        const inputMayusc = inputIntroducido.toUpperCase();

        console.log(inputMayusc);

        // si quieres limiar el array
        // listaAeropuerto.slice(1,3).map()
        return  listaAeropuerto.filter(r =>{
            const codi = r.codi.toUpperCase().includes(inputMayusc)
            const nom = r.nom.toUpperCase().includes(inputMayusc)
            const ciutat = r.ciutat.toUpperCase().includes(inputMayusc)
            return  nom || codi || ciutat
        })

    }


}