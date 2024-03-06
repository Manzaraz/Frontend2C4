/* -------------------------- estado por defecto ------------------------- */
const estadoUsuario = {
    email: "",
    password: "",
    rol: "",
    terminos: false
};

// ponemos en true solo cuando estén correctos
const estadoErroresOK = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};

/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos
const formulario = document.forms[0];

const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputRol = document.querySelector('#rol');
const inputTerminos = document.querySelector('#terminos');

const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const rolError = document.querySelector('#rolError');
const terminosError = document.querySelector('#terminosError');


/* -------------------------------------------------------------------------- */
/*                   [1] FUNCION: mostrar errores al usuario                  */
/* -------------------------------------------------------------------------- */
function mostrarErrores() {
    estadoErroresOK.email
    ? emailError.classList.remove("visible")
    : emailError.classList.add("visible")
 
    estadoErroresOK.password
    ? passwordError.classList.remove("visible")
    : passwordError.classList.add("visible")
 
    estadoErroresOK.rol
    ? rolError.classList.remove("visible")
    : rolError.classList.add("visible")
 
    estadoErroresOK.terminos
    ? terminosError.classList.remove("visible")
    : terminosError.classList.add("visible")     
}

/* -------------------------------------------------------------------------- */
/*               [2] FUNCION: actulizamos los estados de la app               */
/* -------------------------------------------------------------------------- */

// 👇 por cada cambio en el formulario actualizamos
formulario.addEventListener('change', function () {
    // 👇 actualizo el estado de la pantalla con los datos, o sea digamos... cargar el objetoUsuario con el valor ingresado en cada inpunt
    estadoUsuario.email = inputEmail.value
    estadoUsuario.password = inputPassword.value
    estadoUsuario.rol = inputRol.value
    estadoUsuario.terminos = inputTerminos.checked
    // console.log(estadoUsuario);// por lo visto capturo los datos y los almacené bien en el objeot datos persona

    // validar los datos de los inputs ingresados para modificar el objetoErroresOK
    estadoErroresOK.email = validarEmail(estadoUsuario.email)
    estadoErroresOK.password = validarPassword(estadoUsuario.password)
    estadoErroresOK.rol = validarRol(estadoUsuario.rol)
    estadoErroresOK.terminos = validarTerminos(estadoUsuario.terminos)



    mostrarErrores()
});


/* -------------------------------------------------------------------------- */
/*                        [3] FUNCIONES: validar campos                       */
/* -------------------------------------------------------------------------- */
function validarEmail(email) {
    // console.log(email);
    let resultado = false

    // Ahora nos toca validar al viejo estilo JS
    // if (
    //     email.includes("@") && 
    //     email.includes(".") &&
    //     !email.includes(" ") &&
    //     email.length > 5
    // ) {
    //     resultado = true
    //     // console.log("Pasaste la validación");
    // }

    //
    // let regEx = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
    let regEx = new RegExp(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/)
    
    if (regEx.test(email)) {
        resultado = true
        // console.log("Pasaste la validación");
    }

    return resultado
}

function validarPassword(password) {
    let resultado = false
    console.log(password);

    // let regEx = /^(?=.*\d)(?=.*[a-z]).{6,20}$/ // acepta minúsculas, caracteres especiales y números
    let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/ // acepta minúsculas, mayúsculas, caracteres especiales y números

    if (password.match(regEx)) {
        resultado = true   
        console.log("✅");
    }

    return resultado
}

function validarRol(rol) {
    let resultado = false
    
    if (rol == "frontend" || rol == "backend") {
        resultado = true
        console.log("🪵");
    }
    
    return resultado
}

function validarTerminos(verificacion) {
    let resultado = false
    console.log(verificacion);

    if (verificacion) {
        resultado = true
        console.log("Valido ok");
    }

    return resultado
}


/* -------------------------------------------------------------------------- */
/*                      [4] FUNCION: escuchamos el submit                     */
/* -------------------------------------------------------------------------- */

// en el evento submit nos remitimos a chequear nuestro estado de errores
formulario.addEventListener('submit', function (evento) {
    // prevenimos el default para manejar nososotro el comportamiento
    evento.preventDefault()

    if (
        estadoErroresOK.email &&
        estadoErroresOK.password &&
        estadoErroresOK.rol &&
        estadoErroresOK.terminos
    ) {
        alert("Tu formulario fue completado con éxito")
        navegarPaginaExito()
    }
});




/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */
// Esta funcion se va a encargar de realzar la redirección cuando el formulario se complete correctamente.
// Para eso debera cumplir con los siguientes requerimientos.
// 1 - Deshabilitar el boton del formulario.
// 2 - Esperar 3 segundos para redireccionar a la página de 
// 3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
// 4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el botón de "Atrás"(la flechita del navegador) el usuario vuelva a index.

function navegarPaginaExito() {
    //  desarrollar la funcion aqui
    

    //Pista: para redireccionar y no volver atrás es bueno usar el objeto
    location.replace("./usuario.html")


}
