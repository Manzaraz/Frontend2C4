/* --------------------------- listado de almbumes --------------------------- */
const albumesFamosos = [{
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: false
},
{
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: true
},
{
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];



/* -------------------------------------------------------------------------- */
/*                  [1] FUNCION: captar el nombre de usuario                  */
/* -------------------------------------------------------------------------- */
//do while, prompt, innerText
function obtenerUsuario() {
    // const nombreUsuario = document.querySelector("#nombreUsuario")
    const nombreUsuario = document.getElementById("nombreUsuario")

    let usuario = ""
    do {
       usuario = prompt("Ingrese su nombre de usuario: ") 
    } while (usuario == null && usuario == "" && usuario.length < 3);


    // let primeraLetra = usuario.charAt(0).toUpperCase()
    // let restoDelNombre = usuario.slice(1).toLowerCase()
    // console.log(primeraLetra+restoDelNombre);

    let nombres = usuario.split(" ")
    // console.log(nombres);

    // usuario = nombres.map( nombre => {
    //     return  nombre.charAt(0).toUpperCase() +  nombre.slice(1).toLowerCase()
    // }).join(" ")    
    usuario = nombres.map( nombre => nombre.charAt(0).toUpperCase() +  nombre.slice(1).toLowerCase()).join(" ")    


    nombreUsuario.innerText = usuario
    // nombreUsuario.textContent = usuario
    // nombreUsuario.createTextNode(usuario)// modo incorrecto de utilizar createTextNode
    // nombreUsuario.append(document.createTextNode(usuario)) // modo correcto de utilizar createTextNode
}

// obtenerUsuario();

/* -------------------------------------------------------------------------- */
/*                [2] FUNCION: renderizar tarjetas del almbumes               */
/* -------------------------------------------------------------------------- */
//forEach, template strings, innerHTML
function renderizarAlbumes(listado) {
    const covers = document.querySelector(".covers")
    // console.log(covers);
    covers.innerHTML = ""

    listado.forEach(album => {
        
        /*// Metodo de insercion de nodos
        //  Primero creamos los selectores que inyectaremos en el DOM
        const li = document.createElement("li")
        const img = document.createElement("img")
        const p = document.createElement("p")
        const i = document.createElement("i")

        // Agregamos los atributos de cada nodo de las etiquetas creadas
        li.setAttribute("data-id", album.id)

        // img.setAttribute("src", album.imagen)
        // img.setAttribute("alt", album.nombre)
        img.src = album.imagen
        img.alt = album.nombre

        p.textContent = album.nombre

        i.setAttribute("id", album.id)
        i.setAttribute("class", `fa fa-heart${album.like ? " favorito" : ""}`)

        // cargar los neuvos nodos al li y luego el li al cover 
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(i)

        covers.appendChild(li)    
        */

        // Metodo de insercion  de templete literals
        covers.innerHTML += `
            <li data-id="${album.id}">
                <img
                src="${album.imagen}"
                alt="miniatura del album ${album.nombre}">
                <p>${album.nombre}</p>
                <i id="${album.id}" class="fa fa-heart${album.like ? " favorito" : ""} "></i>
            </li>
        `    
    });    
}

renderizarAlbumes(albumesFamosos);


/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                   [3] FUNCION: mostrar datos del usuario                   */
/* -------------------------------------------------------------------------- */
// Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
// correctamente su contenido.
// Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
// 1- contar la cantidad de albumes del array y pintarlo en el span correspondiente
// 2- contar la cantidad de favoritos y pintarlo en el span correspondiente
// 3- tener en cuenta: usar las palabra en plural o en singular, según cuando
// sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos )
function mostrarDatosEnPerfil(albumes) {
    // desarrollar la función 👇
    // <span id="cant-albums">0 álbumes</span> en tu listado - En total <span id="cant-favoritos">0 favoritos</span>
    const cantidadDeAlbumes = document.querySelector("#cant-albums")
    const cantidadDeFavoritos = document.getElementById("cant-favoritos")

    let contadorAlbumes = 0, contadorFavoritos = 0

    albumes.forEach( (album) => {
        // contadorAlbumes += 1
        contadorAlbumes++

        if (album.like == true) {
            // me sumará el contador de favoritos
            contadorFavoritos++
        }
        // console.log(contadorAlbumes, contadorFavoritos);

        // logica para renderizar el contador de albumes
        if (contadorAlbumes == 1) {
            cantidadDeAlbumes.innerText = `${contadorAlbumes} album`
        } else {
            cantidadDeAlbumes.innerText = `${contadorAlbumes} albumes`            
        }
        // Logica para camabiar contador de favoritos
        if (contadorFavoritos == 1) {
            cantidadDeFavoritos.innerText = `${contadorFavoritos} favorito`
        } else {
            cantidadDeFavoritos.innerText = `${contadorFavoritos} favoritos`            
        }
    })
}
mostrarDatosEnPerfil(albumesFamosos);