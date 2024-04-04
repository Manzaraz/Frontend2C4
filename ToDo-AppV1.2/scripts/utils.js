// Creamos un nuevo metodo que nos sirve para verificar si el campo está vacio y si hay errores
const setErrors = (message, field, isError = true) => { 
    if (isError) {
        field.classList.add("invalid")
        field.nextElementSibling.classList.add("error")
        field.nextElementSibling.textContent = message        
    } else {
        field.classList.remove("invalid")
        field.nextElementSibling.classList.remove("error")
        field.nextElementSibling.textContent = ""        
    }
 }

 // Creamos un metodo para verificar si el input esta vacio
 const isEmpty = (message, e) => {
    // console.log(e);
    // console.log(e.target);
    const field = e.target
    const fieldValue = field.value

    if (fieldValue.length == 0) {
        setErrors(message, field)
    }
 }



/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    
}

/* ---------------------------------- email --------------------------------- */
// function validarEmail(email) {
function validarEmail(e) {
    // console.log(e);
    // console.log(e.target); 
    // console.log(e.target.value);
    const field = e.target
    const fieldValue = normalizarEmail(field.value)
    console.log(fieldValue);

    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    // console.log(regex.test(fieldValue));

    if (fieldValue.length > 4 && !regex.test(fieldValue)) {
        // console.log("Cumple la validacion adelante");
        setErrors(`🚨 Por favor ingrese un ${field.name} válido`, field)
    } else {
        // console.log("No cumple la validacion CORRÍGELO");
        setErrors(``, field, false)
        
    }
    
}

function normalizarEmail(email) {
    return email.trim().toLowerCase()
}

/* -------------------------------- password -------------------------------- */
// function validarContrasenia(contrasenia) {
function validarContrasenia(e) {
    // console.log(e);
    // console.log(e.target);
    const field = e.target
    const fieldValue = field.value

    if (fieldValue.length < 6) {
        setErrors(`🚨 Por favor ingrese ${field.name}  válido, que sea mayor a 6 caracteres.`, field)
    } else {
        setErrors(``, field, false)
        
    }


}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    
}
