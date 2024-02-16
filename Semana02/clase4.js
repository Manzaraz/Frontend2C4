// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 4.

const listadoNoticias = [{
        titulo: "La emoción de Lisandro Martínez",
        epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
        foto: "./img/futbol.webp"
    },
    {
        titulo: "La renuncia de Liz Truss",
        epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
        foto: "./img/boris.webp"
    },
    {
        titulo: "Los motivos",
        epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
        foto: "./img/escuela.webp"
    }
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

// Primero, mantengamos el HTML vinculado solo con clase5 y clase6 👌

/* -------------------------- PRACTICANDO ATRIBUTOS ------------------------- */
// Completemos correctamente el 'alt' de cada imagen con la frase "miniatura de noticia"
const imagen = document.querySelector(".noticias article img")
console.log(imagen);
console.log(imagen.getAttribute("alt"));
imagen.setAttribute("alt","El gol de Lisandro");
// imagen.removeAttribute("alt");


// rellenamos el atributo👇

// Hagamoslo más dinámico y recorramos todas las imagenes👇


/* ---------------------- PRACTICANDO CREACION DE NODOS --------------------- */
// 1- Ahora vamos a ir al HTML y eliminar los 3 Article que se encuentran en el main.
// 2- Comentamos la parte de este código de "Practicando atributos"
// 3- Vamos a crear de a uno e insertarlos en el HTML usando un bucle👇
const main = document.querySelector("main")
main.innerHTML = ""// con esta accion borrar toodo contenido previo de la etiqueta

listadoNoticias.forEach( noticia => {
    // Creamos los elementos
    const article = document.createElement("article")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")
    const p = document.createElement("p")

    // Agregamos el contenido a cada etiqueta etiqueta
    h2.textContent = noticia.titulo
    img.setAttribute("src", noticia.foto)
    img.setAttribute("alt", `minitura ${noticia.titulo}`)
    p.innerText = noticia.epigrafe

    // Ahora nos toca insertar las etiquetas con su contenido a un elemento contendeor🍴
    article.appendChild(h2)
    article.appendChild(img)
    article.appendChild(p)

    // Finalmente lo inserto a un elemento del dom, que es la etiqueta main
    main.appendChild(article)
})

const ultimoMomento = {
    titulo: "A nueve años de la muerte de Gustavo Cerati",
    epigrafe: "actitud rockera, sensibilidad pop y el sonido universal de un artista único/nEl paso del tiempo agiganta la relevancia de la obra del músico argentino./nSu legado ilumina el panorama de la escena actual con indiscutible vigencia.",
    foto: "https://www.clarin.com/img/2021/03/30/JB6p137T2_360x240__1.jpg"
}


main.innerHTML += `
    <article>
        <h2>${ultimoMomento.titulo}</h2>
        <img src="${ultimoMomento.foto}" alt="Ceratti eterno">
        <p>${ultimoMomento.epigrafe}</p>
    </article>
`


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;

function renderizandoElementos() {
// desarrollar la consigna aquí


}
renderizandoElementos();