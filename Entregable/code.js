// let datosPersona = {
//   nombre: "",
//   edad: 0,
//   ciudad: "",
//   interesPorJs: "",
// };
// const listado = [{
//     imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
//     lenguajes: "HTML y CSS",
//     bimestre: "1er bimestre",
//   },
//   {
//     imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
//     lenguajes: "Javascript",
//     bimestre: "2do bimestre",
//   },
//   {
//     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
//     lenguajes: "React JS",
//     bimestre: "3er bimestre",
//   },
// ];
// const profileBtn = document.querySelector("#completar-perfil");
// const materiasBtn = document.querySelector("#obtener-materias");
// const verMasBtn = document.querySelector("#ver-mas");
// const cambiarTema = document.querySelector('#cambiar-tema');
// profileBtn.addEventListener("click", renderizarDatosUsuario);
// materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
// cambiarTema.addEventListener("click", alternarColorTema);
// /* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
// function obtenerDatosDelUsuario() {
//    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
//    datosPersona.nombre = prompt ('Ingresá tu nombre');
//    datosPersona.edad = (2024 - parseInt(prompt ('Ingresa año de nacimiento')));
//    datosPersona.ciudad = prompt ('Ingresa tu ciudad de residencia');
   
//    const interesJS = confirm('Te interesa JavaScript?');
//    datosPersona.interesPorJs = interesJS ? 'si' : 'no';
//    console.log (datosPersona);
   
//  }
   
//  function renderizarDatosUsuario() {
//    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
//    obtenerDatosDelUsuario();
//    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
   
//    document.querySelector('span');
//    nombre. innerHTML = datosPersona. nombre;
//    edad. innerHTML = parseInt (datosPersona .edad);
//    ciudad. innerHTML = datosPersona. ciudad;
//    javascript.innerHTML = datosPersona. interesPorJs;
   
//  }
//  function recorrerListadoYRenderizarTarjetas() {
//    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
   
//  const materias = document.querySelector('#fila')
//  materias.innerHTML = ""
//  listado.forEach((materia) => {
//    materias.innerHTML += `
//      <div class="caja">
//        <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
//      <p class="lenguajes">${materia.lenguajes}</p>
//      <p class="bimestre">${materia.bimestre}</p> 
//    `
//  })
//  }
//  function alternarColorTema() {
//    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
     
//      document.querySelector('#sitio').classList.toggle("dark");
//  }
//  /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
//  document.addEventListener('keydown', function(e) {
//    if (e.code === 'KeyF' || (e.code === 'Keyf')) {
//      document.querySelector('.oculto').style.visibility = 'visible';
//    }
//  });

/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
// function obtenerDatosDelUsuario() {
//   /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  
// }
// function renderizarDatosUsuario() {
//   /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
//   obtenerDatosDelUsuario();
//   /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
// }
// function recorrerListadoYRenderizarTarjetas() {
//   /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
// }
// function alternarColorTema() {
//   /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  
  
// }
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
// let datosPersona = {
//   nombre: "",
//   edad: 0,
//   ciudad: "",
//   interesPorJs: "",
// };
// const listado = [
//   {
//     imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
//     lenguajes: "HTML y CSS",
//     bimestre: "1er bimestre",
//   },
//   {
//     imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
//     lenguajes: "Javascript",
//     bimestre: "2do bimestre",
//   },
//   {
//     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
//     lenguajes: "React JS",
//     bimestre: "3er bimestre",
//   },
// ];
// const profileBtn = document.querySelector("#completar-perfil");
// const materiasBtn = document.querySelector("#obtener-materias");
// const verMasBtn = document.querySelector("#ver-mas");
// const cambiarTema = document.querySelector('#cambiar-tema');
// profileBtn.addEventListener("click", mainFunction);
// materiasBtn.addEventListener("click", mainFunction);
// cambiarTema.addEventListener("click", mainFunction);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
// function mainFunction() {
//   obtenerDatosDelUsuario();
//   if (this === profileBtn) {
//     renderizarDatosUsuario();
//   } else if (this === materiasBtn) {
//     recorrerListadoYRenderizarTarjetas();
//   } else if (this === cambiarTema) {
//     alternarColorTema();
//   }
// }
function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt("Ingrese su nombre:");
  datosPersona.edad = parseInt(prompt("Ingrese su edad:"));
  datosPersona.ciudad = prompt("Ingrese su ciudad:");
  datosPersona.interesPorJs = prompt("¿Cuál es su interés por JavaScript?");
}
function renderizarDatosUsuario() {
  const nombreElement = document.querySelector("#nombre");
  const edadElement = document.querySelector("#edad");
  const ciudadElement = document.querySelector("#ciudad");
  nombreElement.textContent = `Nombre: ${datosPersona.nombre}`;
  edadElement.textContent = `Edad: ${datosPersona.edad}`;
  ciudadElement.textContent = `Ciudad: ${datosPersona.ciudad}`;
}
function recorrerListadoYRenderizarTarjetas() {
  // const tarjetasContainer = document.querySelector("#tarjetas-container");
  const tarjetasContainer = document.querySelector("#fila");
  listado.forEach((materia) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    const img = document.createElement("img");
    img.src = materia.imgUrl;
    const titulo = document.createElement("h2");
    titulo.textContent = materia.lenguajes;
    const bimestre = document.createElement("p");
    bimestre.textContent = `Bimestre: ${materia.bimestre}`;
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(bimestre);
    tarjetasContainer.appendChild(tarjeta);
  });
}
function alternarColorTema() {
  // document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("dark");
}
    