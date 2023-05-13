import {llenarFormulario} from "./../views/utils.js"

export function get(url, FORMU) {
fetch(url)
.then(response => response.json())
.then(data => {
    llenarFormulario(FORMU, data);
})
.catch(error => {
    console.log(error);
})
};