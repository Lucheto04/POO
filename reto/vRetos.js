import * as calza from './Calzado.js'
import * as prenda from './Prenda.js'


let tipoPrenda = document.querySelector('.seleccionPrenda').style.display = 'none';
let tallaPrenda = document.querySelector('.tallaPrenda').style.display = 'none';
let planchar = document.querySelector('.planchar').style.display = 'none';
let seleccionCalzado = document.querySelector('.seleccionCalzado').style.display = 'none';
let tallaCalzado = document.querySelector('.tallaCalzado').style.display = 'none';



let tipoProducto = function () {
    let prenda = document.querySelector('.prenda').value;
    let calzado = document.querySelector('.calzado').value;

    if (calzado.addEventListener('change', tipoProducto)) {
        seleccionCalzado = document.querySelector('.seleccionCalzado').style.display = 'block';
        tallaCalzado = document.querySelector('.tallaCalzado').style.display = 'block';
    } else if (prenda.addEventListener('change', tipoProducto)) {
        tipoPrenda = document.querySelector('.seleccionPrenda').style.display = 'block';
        tallaPrenda = document.querySelector('.tallaPrenda').style.display = 'block';
        planchar = document.querySelector('.planchar').style.display = 'block';
    }
}

