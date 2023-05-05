const buildTarjeta = function(personajes) {
    const main = document.querySelector('main');
    personajes.results.forEach(element => {
        console.log(element);
        const ARTICULO = document.createRange().createContextualFragment(/*html*/ `
        <article>
        <div class="image-container">
            <img src="${element.image}">
        </div>
        <h2>${element.name}</h2>
        <span>${element.status} </span>
        </article>
        `);
        
        main.append(ARTICULO);
    });
};



const obtenerPersonajes = function() {
    fetch("https://rickandmortyapi.com/api/character")
    .then(result => result.json())
    .then(datos => {
        console.log(datos);
        buildTarjeta(datos);

    })
    .catch((err) => {
        console.log("Error al consumir la API\n", err.message);
    })
    .finally(() => {
        console.log("Se ha consumido todo el API");
    })

};

obtenerPersonajes();