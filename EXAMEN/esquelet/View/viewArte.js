import {ServiceArte} from "../Service/ServiceArte.js";
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
    // console.log(contendorBtn);

    let contador = 0;
    for (const boton of contendorBtn) {
        boton.addEventListener("click", function () {

            setImage(this.value)
        });

    }
}

function cambiarNombreCategoria(){

    // const elementA = elemtsCateg.querySelectorAll("a");
    // console.log(elementA)
    //
    // for (let i = 0; i < elemtsCateg.length; i++) {
    //     const elementA = elemtsCateg[i].querySelector("a");
    //     console.log(elementA);
    // }
}

function crearLi(){
    const getEleUL = document.querySelector("#filters");
    for (let i = 0; i < 1; i++) {
        const elemLI = document.createElement("li");
        const elemA = document.createElement("a");
        elemA.textContent = "Funciona?"
        getEleUL.appendChild(elemLI);
        elemLI.appendChild(elemA);
    }


}
crearLi();
(async () => {
    ponerFuncionesTododBotones()


    const servicioCategoria = new ServiceArte()
    const listaCatetegoria = await servicioCategoria.getAllCategorias();
    // recuerda que es un Array
    // console.log(listaCatetegoria);

    const elemtsCateg = document.querySelectorAll("ul#filters a");

    console.log(elemtsCateg);
    for (let i = 1; i < elemtsCateg.length; i++) {
        elemtsCateg[i].textContent = listaCatetegoria[i -1].nombre;
    }

    const selectFormu = document.querySelector("#form-categoria");
    for (let i = 1; i < listaCatetegoria.length; i++) {

        const elem = document.createElement("option");
        elem.value = listaCatetegoria[i].nombre;
        elem.textContent = listaCatetegoria[i].nombre;
        selectFormu.appendChild(elem);
    }

    const listaArte = await servicioCategoria.listaObrasArter()
    console.log( listaArte);


    // crearemos un boton para enviar la respuesta
    const bntEnviar = document.querySelector("#form-send");



    // FIXME es submit o click?
    bntEnviar.addEventListener("click", function (){
        const inputTitol = document.querySelector("#form-titol").value;
        const inputUrl = document.querySelector("#form-url").value;
        const inputDAta = document.querySelector("#form-data").value;
        const inputSelect = document.querySelector("#form-categoria").value;
        console.log(inputTitol, inputUrl, inputDAta, inputSelect);
    });



})();