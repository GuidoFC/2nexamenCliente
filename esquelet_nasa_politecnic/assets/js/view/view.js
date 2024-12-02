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




function putValuesBottons(){
    document.querySelector("#anterior").value = 0;
    document.querySelector("#seguent").value = 3;
}


putValuesBottons();

(async () => {

    const getFechas = getDates()

    pintarFechas(getFechas)





})();