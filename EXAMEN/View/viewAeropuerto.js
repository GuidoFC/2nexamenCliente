import {ServiceAeroport} from "../Service/ServiceAeroport.js";

// intenta crear los elementos que necesitas, para luego usarlo.

(async () => {

    const service = new ServiceAeroport
    // const listaAeropuerto = await service.getAllAeroport();

    // piensa que listaAeropuerto es un array
    // lo usare en un addEventlistener, poner aqui el advenListener

    service.getAllAeroport();


})();