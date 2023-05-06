


let id1 = Math.round(Math.random() * 150);
let id2 = Math.round(Math.random() * 150);


console.log(id1);
console.log(id2);


function pelea() {



    // Primer Pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
    .then(restult => restult.json())
    .then(data => {

        let nombrePokemon = (data.name);
        let widthPokemon = (data.width);
        let heighPokemon = (data.heigh);
    
        document.querySelector('#pokemon1').innerHTML = /*html*/ `
        <img src="${data.sprites.front_default}" alt="" styles>
        `;

        document.querySelector('#nombrePokemon1').innerHTML = /*html*/ `
        <h1>${nombrePokemon}</h1>
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
        <img src="${data.sprites.front_default}" alt="">
        `;

        document.querySelector('#nombrePokemon2').innerHTML = /*html*/ `
        <h1>${nombrePokemon}</h1>
        `;

    });
}




window.addEventListener("load", function () {
    document.getElementById("pelea").addEventListener("click", pelea);
});
