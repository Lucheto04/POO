import {post} from "./../models/post.js"
import {get} from "./../models/get.js";
import {put} from "../models/put.js";
import {delet} from "../models/delet.js";

export function controlador(FORMU, event, entidad) {
    const URL="http://localhost:4000/";
    let url = "";
    let datos = Object.fromEntries(new FormData(FORMU));
    switch (event.target.value) {
        case "Agregar":
            url = URL + entidad
            post(url, datos);
            FORMU.reset();
            break;
        case "Buscar":
            url = URL + entidad + `/${datos.id}`;
            get(url, FORMU);
            break;
        case "Modificar":
            url = URL + entidad + `/${datos.id}`;
            put(url, datos);
            break;
        case "Borrar":
            url = URL + entidad + `/${datos.id}`;
            delet(url)
            FORMU.reset();
            break;
    }
};


