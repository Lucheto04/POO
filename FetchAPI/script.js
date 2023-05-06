let id1 = Math.round(Math.random() * 150);
let id2 = Math.round(Math.random() * 150);
function pelea() {
    // Primer Pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
    .then(restult => restult.json())
    .then(data => {
        let nombrePokemon = (data.name);    
        document.querySelector('#pokemon1').innerHTML = /*html*/ `
        <img src="${data.sprites.front_default}" style="border: 1px solid black;" alt="">
        `;
        document.querySelector('#nombrePokemon1').innerHTML = /*html*/ `
        <h1>${nombrePokemon}</h1>
        <p>${data.base_experience}</p>
        `;
    });
    // Segundo Pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
    .then(restult => restult.json())
    .then(data => {
        let nombrePokemon = (data.name);
        let widthPokemon = (data.width);
        let heighPokemon = (data.heigh);
        document.querySelector('#pokemon2').innerHTML = /*html*/ `
        <img src="${data.sprites.front_default}" style="border: 1px solid black;" alt="">
        `;
        document.querySelector('#nombrePokemon2').innerHTML = /*html*/ `
        <h1>${nombrePokemon}</h1>
        <p>${data.base_experience}</p>
        `;
        versus = document.querySelector('#versus').style.display = 'block';
    });
}
let versus = document.querySelector('#versus').style.display = 'none';
window.addEventListener("load", function () {
    document.getElementById("pelea").addEventListener("click", pelea);
});
