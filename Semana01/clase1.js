/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
    // Saludar al visitante
    alert("Bienvenido al juego de 🗿Piedra, 🗒️Papel o ✂️Tijera de Frontend 2.!")
    
    // Pedir el nomber al usuario y guardarlo en una variable
    const nombre = prompt("¿Cuál es tu nombre?") // Ojo 👀 aqui

    // Devolvemos un mensaje al usuario
    // alert("Hola " + nombre + ", ¡Bienvenido y Mucha suerte! 🍀")
    alert(`Hola ${nombre}, ¡Bienvenido y Mucha suerte! 🍀`)
    
    // Mostramos por consola los datos al desarrolador para debuggear
    console.log("------------------");
    console.log("El nombre del jugador es:");
    console.log(nombre);
    console.log("------------------");

    return nombre
}

let nombreUsuario = iniciarJuego()

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar1 la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

