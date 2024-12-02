import {ServiceAeroport} from "../Service/ServiceAeroport.js";
import {original, grayscale, invert, sepia, setImage} from "../gallery.js"


//
function ponerFuncionesRadios() {
    const getOriginal = document.querySelector("#original");

    getOriginal.addEventListener('click', function () {
        original();
    })

    const getGreyScale = document.querySelector("#grayscale");


    getGreyScale.addEventListener('click', function () {
        grayscale();
    })

    const getinvert = document.querySelector("#inverted");


    getinvert.addEventListener('click', function () {
        invert();
    })


    const getSepia = document.querySelector("#sepia");


    getSepia.addEventListener('click', function () {
        sepia();
    })
}


ponerFuncionesRadios();

function crearBotones() {
    const contendorDiv = document.querySelectorAll("div.item");

    for (let i = 0; i < contendorDiv.length; i++) {
        // const geImg = contendorDiv[i].querySelector("img").src;
        // console.log("Es la url? ", geImg.src);
        const btnCreado = document.createElement("button");
        btnCreado.className = "btnIMG";
        btnCreado.textContent = "Selecciona Esta img"
        btnCreado.value = contendorDiv[i].querySelector("img").src;
        // btnCreado.id = i;
        contendorDiv[i].appendChild(btnCreado);
        // console.log(contendorDiv[i]);
    }
}

crearBotones();

function ponerFuncionesTododBotones() {
    const contendorBtn = document.querySelectorAll(".btnIMG");
    console.log(contendorBtn);

    let contador = 0;
    for (const boton of contendorBtn) {
        boton.addEventListener("click", function () {

            setImage(this.value)
        });

    }
}

ponerFuncionesTododBotones()


(async () => {


})();