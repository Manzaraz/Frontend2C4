/* --------------------------------- spinner -------------------------------- */
// necesitamos clickear el boton y que desaparezca el texto y se vea el gif unos segundos
const btn = document.querySelector('button');
const btnImg = document.querySelector('button img');
const btnTexto = document.querySelector('button span');

btn.addEventListener("click", () => { 
    console.log("click");

    // inverto las clases para mostrar el spinner
    invertirClases()
    btn.setAttribute("disabled","")

    // despues de 3 segundos invertimos esta situación... o cuando recibimos la respusta del fetch
    setTimeout(() => {
        invertirClases()
        btn.removeAttribute("disabled")
    }, 3000);

})

function invertirClases() {
    btnImg.classList.toggle("oculto")
    btnTexto.classList.toggle("oculto")
}


/* ----------------------------- barra progreso ----------------------------- */
const barra = document.querySelector('#barra');
const relleno = document.querySelector('#relleno')

let porcentaje = 0

// Mostrar la barra en porcentaje incial👇🏼
relleno.style.width = `${porcentaje}%`

const intervalo = setInterval(() => {
    if (porcentaje < 95) {
        porcentaje++
        relleno.style.width = `${porcentaje}%`
    } else {
        // frenamos el intervalo
        clearInterval(intervalo)
    }
}, 15);

// en alguna parte del fetch, dentro del then ustedes 
// relleno.style.width = `100%`



/* -------------------------------- skeleton -------------------------------- */

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/pikachu';
const pokemon = document.querySelector('#pokemon')
const skeleton = document.querySelector('.skeleton');

fetch(apiUrl)
    .then( response => response.json())
    .then( data => {
        console.log(data);
        console.log(data.name);
        console.log(data.sprites.front_default);
        console.log(data.types[0].type.name);
        let nombre = data.name
        let imagen = data.sprites.front_default
        let tipo = data.types[0].type.name

        // usamos el setTimeout para demorar la carga del fetch, esto opcional
        setTimeout(() => {
            // Remuevo el article#skeleton
            skeleton.remove()
    
            // Insertar la tarjeta
            pokemon.innerHTML = componenteTarjeta(nombre, imagen, tipo)            
        }, 3000);


    })

const componenteTarjeta = (nombre, img, tipo) => {
    return `
        <article >
            <h2>${nombre}</h2>
            <img src="${img}" alt="pokemon">
            <h6>Tipo: ${tipo}</h6>
        </article>
    `
}