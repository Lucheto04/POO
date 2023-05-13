import { controlador } from "./../controllers/controlador.js"

const FORMU = document.querySelector('form');

FORMU.addEventListener('click', e => {
    e.preventDefault();

    controlador(FORMU, e, "skills");

    e.stopPropagation();
});

