import {ServiceNasa} from "../service/serviceNasa.js";
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


function putValuesBottons() {
    document.querySelector("#anterior").value = 0;
    document.querySelector("#seguent").value = 3;
}


(async () => {
    putValuesBottons();
    const getFechas = getDates()

    pintarFechas(getFechas)

    const getSelect = document.querySelector("#dates");

    const btnCerca = document.querySelector("#cerca");


    btnCerca.addEventListener("click", async function () {
        const valor = getSelectValues(getSelect)

        // buscar los meteoritos a la vez
        const service = new ServiceNasa()
        const valores = await service.getAsteroide(valor)
    })


})();