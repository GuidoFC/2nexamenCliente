import {ServiceAeroport} from "../Service/ServiceAeroport.js";
import {original, grayscale, invert, sepia} from "../gallery.js"


//
function ponerFuncionesRadios(){
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

function crearBotones(){

}

ponerFuncionesRadios();

(async () => {



})();