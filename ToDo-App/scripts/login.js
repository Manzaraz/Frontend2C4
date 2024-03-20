window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    // const form = document.querySelector("form")
    const form = document.forms[0]
    const email = document.querySelector("#inputEmail")
    const password = document.querySelector("#inputPassword")
    const url = "https://todo-api.ctd.academy/v1"

    
    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault() // prevenimos el comportamiento por defecto del formulairo

        // Crear nuestra bomba💣, objeto de lo que capturamos en los inputs para mandarlo en el fetch💥, 
        const payload = {
            email: email.value,
            password: password.value
        }
        // console.log(payload);
        
        // configuramos nuestro objeto de configuraciones que le pasaremos por parametro al fetch 
        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // console.log(settings);

        // Lanzamos la consulta del login a la API
        realizarLogin(settings)
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
    //    console.log(settings);
       console.log("🎬Lanzar la consulta a la API...");

       fetch(`${url}/users/login`, settings)
        .then(response => {
            // console.log(response);
            if (response.ok) return response.json()

            return Promise.reject(response)
        })
        .then(data => {
            console.log("Promesa cumplida 💍👰🏽‍♀️");
            console.log(data);
            console.log(data.jwt);

            if (data.jwt) {
                // Guardamos el dato jwt en el local storage (este token de autenticación)
                localStorage.setItem("jwt", JSON.stringify(data.jwt))

                // Limpiar el formulario
                form.reset()
                
                // redireccionamos a nuestro dashboard de la ToDo
                location.replace("./mis-tareas.html")

            }


        })
        .catch(err => {
            console.log("Promesa rechazada 🙅🏻‍♀️");
            console.error(err.status);
            if (err.status == 400) {
                console.warn("Contraseña Incorreta");
                alert("Contraseña Incorreta, por favor revísela");
            } else if (err.status == 404) {
                console.warn("El usuario no existe");
                alert("El usuario no existe, por favor revise su email");
            } else {
                console.error("Error de Servidor");
                alert("Error de Servidor, comúniquese con el proveedor");                
            }
        })



       console.log("🏁Terminamos la consulta a la API...");
        
    };
});

// "email": juana@dearco.com
// "password": "123456"