import cargarTexto from "./APISmodulo1.js";

const CARGARTXT = document.querySelector('#cargartxt');
const BTNCARGARTXT = document.querySelector('#btnTexto');


BTNCARGARTXT.addEventListener('click', (e) => {
    cargarTexto(CARGARTXT);
    e.stopPropagation();
});



const BTNCARGARJSON = document.querySelector('#btnjson');
const TBLBODY = document.querySelector('#dattable');

BTNCARGARJSON.addEventListener('click', (e) => {
    cargarJSON(TBLBODY);

    e.stopPropagation;
});


function cargarJSON(elemHTML) {
    fetch('datos.json')
    .then(response => response.json())
    .then(datos => {
        console.table(datos);
        buildTable(elemHTML, datos);

    });
};


function buildTable(elemHTML, datos) {
    let fila = "";
    for (let valor of datos) {
        fila += /*html*/`
        <tr>
            <td>${valor.NOMBRE}</td>
            <td>${valor.EQUIPO}</td>
            <td id="tbledad">${valor.EDAD}</td>
            <td id="tblimg">
            <img src= ${valor.SEXO == "M" ? "designer.png" : "avatar.png"  } 
                alt="Camper">
            </td>
        </tr>
        `;
    }

    elemHTML.innerHTML = fila;
};






