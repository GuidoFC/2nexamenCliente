import {Cat} from "../Model/Cat.js";

export class ServiceCat {
    #API_KEY_CAT =
        "live_e969kGjYOiD5EAmM0ewuFl6jKm7rddZzJk6IoXOKCsp4mluAYdMjGyZJPs9HdqCt";


    async getImag() {
        const response = await fetch("https://api.thecatapi.com/v1/images/?limit=10", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.#API_KEY_CAT,
            },
        })

        const data = await response.json();

        console.log("service,", data)
        // importante si usas { } tengo que poner un return
        // con el map me devuevel un Array entonces lo tendre que recorrer
        return data.map(r => {

            return new Cat(r.id, r.original_filename, r.url)

        })


    }


    async uploadImgToAPi(fileFoto) {
        const myHeaders = new Headers();
        myHeaders.append("x-api-key", this.#API_KEY_CAT);

        const formdata = new FormData();
        formdata.append("file", fileFoto);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };


        const response = await fetch("https://api.thecatapi.com/v1/images/upload",
            requestOptions)


        const result = response.text()
        console.log(result)


    }
}
