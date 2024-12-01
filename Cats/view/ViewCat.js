import {ServiceCat} from "../Service/ServiceCat.js";
import {Cat} from "../Model/Cat.js";

function putImage(yourImage){
    for (const image of yourImage){
        const newImg = document.createElement("img");
        newImg.src = image.url;
        newImg.style.width = "50px";
        newImg.style.height = "50px";

        document.querySelector("#app").appendChild(newImg);
    }

}

function createLabelAndInput(){
    const label = document.createElement("label");
    label.textContent = "Subir tu imagen aqui"

    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.id = "subirFoto";

    document.querySelector("body").appendChild(label);
    document.querySelector("body").appendChild(input);
}

(async () => {


    const serviceCat = new ServiceCat();
    const getImage = await serviceCat.getImag();
    putImage(getImage);

    createLabelAndInput();

    const getInput = document.querySelector("#subirFoto");
    getInput.addEventListener("change", function (){
        const onlyFirstImg = this.files[0]; /* now you can work with the file list */
        console.log("Es una imgne ", onlyFirstImg)
        const serviceCat = new ServiceCat();
        serviceCat.uploadImgToAPi(onlyFirstImg)

    })

})();