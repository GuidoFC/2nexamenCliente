import {ServiceAeroport} from "../Service/ServiceAeroport.js";

function createSearch() {
    const getApp = document.querySelector("#App")

    const newInput = document.createElement("input")
    const newlabel = document.createElement("label")
    newInput.setAttribute("type", "search");
    newInput.id = "input";

    newlabel.textContent = "Buscar Aerropuerto"


    getApp.appendChild(newlabel);
    getApp.appendChild(newInput);

}

createSearch();

function crearDivMostrar() {
    const div = document.createElement("div");
    div.id = "listAeropuerto"
    div.textContent ="Lista de aeropuertos Encontrados"
    const getEle = document.querySelector("#App");
    getEle.appendChild(div)
}

crearDivMostrar()

function divMuestraRespuestas(aeropEncontrados) {
    const getDivLista = document.querySelector("#listAeropuerto");

    getDivLista.textContent = "";


    for (const aeropueto of aeropEncontrados) {
        const p = document.createElement("p");
        p.textContent = aeropueto.nom + " latitud " + aeropueto.latitud + " longitud " + aeropueto.longitud;
        getDivLista.appendChild(p)
    }
}



(async () => {

    const service = new ServiceAeroport
    const listaAeropuerto = await service.getAllAeroport();

    // piensa que listaAeropuerto es un array

    const getInput = document.querySelector("#input")

    getInput.addEventListener("input", function () {
        const valorIntroducido = this.value;

        const aeropEncontrados = service.searchAeroport(valorIntroducido, listaAeropuerto)

        divMuestraRespuestas(aeropEncontrados)

    })


})();