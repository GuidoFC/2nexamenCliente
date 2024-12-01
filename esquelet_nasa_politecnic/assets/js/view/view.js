import {Service} from "../service/service.js";
import {getDates, getSelectValues} from "../dates.js"

function pintarFechas(data) {
    const btnSelect = document.querySelector("#dates")

    for (let fecha of data) {
        const option = document.createElement("option")
        option.value = fecha.value
        option.textContent = fecha.label
        btnSelect.appendChild(option);
    }
}
let asteroideNasa;
async function getFechaSeleccionada() {
    const btnSelect = document.querySelector("#dates")
    for (const option of btnSelect) {
        option.addEventListener("click", async function () {
            const fecha = this.value
            const serviceAsteroide = new Service();
            asteroideNasa = await serviceAsteroide.getAsteroide(fecha)
            pintarTableTitulo(asteroideNasa);
            logicaBtnSiguiente(asteroideNasa);
            // // pasar por parametro lo que tiene que pintar
            // pintarTableTitulo(asteroideNasa)
        })
    }

}

function pintarAsteroide(datosAsteroide, min, max){

    datosAsteroide.slice(min, max).map(r => {
        const tablaDOM = document.querySelector("#taula");
        const trElm2 = document.createElement("tr");

        const tdElmNom = document.createElement("td");
        const tdElmPeligr = document.createElement("td");
        const tdElmDiametro = document.createElement("td");

        tdElmNom.textContent = r.nom;
        tdElmPeligr.textContent = r.peligroso;
        tdElmDiametro.textContent = r.diametro;

        trElm2.appendChild(tdElmNom)
        trElm2.appendChild(tdElmPeligr)
        trElm2.appendChild(tdElmDiametro)
        tablaDOM.appendChild(trElm2);

    })
}

function pintarTableTitulo(datosAsteroide) {
    const titulo = ["nombre", "peligros", "diametro"]
    const tablaDOM = document.querySelector("#taula");

    tablaDOM.textContent = "";
    const trElm = document.createElement("tr");


    // creamos los titulos
    for (let i = 0; i < titulo.length; i++) {
        const thElm = document.createElement("th");
        thElm.textContent = titulo[i];
        trElm.appendChild(thElm)
    }
    tablaDOM.appendChild(trElm);

    pintarAsteroide(datosAsteroide, 0, 3)


}

function putValuesBottons(){
    document.querySelector("#anterior").value = 0;
    document.querySelector("#seguent").value = 3;
}

function logicaBtnSiguiente(datosAsteroide) {
    const btnSig = document.querySelector("#seguent");

    btnSig.addEventListener("click", () => {
        const valor = btnSig.value; // Obtenemos el valor directamente del botón
        console.log("valor es", valor);
        console.log(datosAsteroide);
    });
}


(async () => {

    const getFechas = getDates()

    pintarFechas(getFechas)

    const serviceAsteroide = new Service();
    // asignar valores a los botones

    putValuesBottons();

    const asteroides = await getFechaSeleccionada()





})();