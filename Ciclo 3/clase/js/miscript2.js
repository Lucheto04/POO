// let salbas = 2800000;

// console.log("Valor EPS: ", salbas * PORCEPS);


/*
    EJEMPLO 1 DEL SCRIPT 1
*/

import { suma, PI} from './miscript1.js';
console.log(suma(2, 3));
console.log(PI);

console.log('-'.repeat(30));

import * as LuchoTuPapa from './miscript1.js';
console.log(LuchoTuPapa.suma(2, 3));
console.log(LuchoTuPapa.PI);
console.log(LuchoTuPapa.SPUTNIK.promedad);
console.log(LuchoTuPapa.Camper.mensaje());

console.log('-'.repeat(30));

/*
    EJEMPLO 2 DEL SCRIPT 3
*/

import {factorial, PI as PII} from './miscript3.js'
console.log(factorial(5));
console.log(PII);

console.log('-'.repeat(30));

import * as LuchoSosUnCrack from './miscript3.js'
console.log(LuchoSosUnCrack.factorial(5));
console.log(LuchoSosUnCrack.PI);

console.log('-'.repeat(30));

/*
    EJEMPLO 3 DEL SCRIPT 4
*/

import {MENSAJE} from './miscript4.js'
console.log(MENSAJE());

console.log('-'.repeat(30));


