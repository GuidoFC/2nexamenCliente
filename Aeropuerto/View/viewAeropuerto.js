import {ServiceAeroport} from "../Service/ServiceAeroport.js";


(async () => {

    const service = new ServiceAeroport
    // const listaAeropuerto = await service.getAllAeroport();

    // piensa que listaAeropuerto es un array

    service.getAllAeroport();


})();