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
function obtenerDatosDelUsuario() {
   /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
   datosPersona.nombre = prompt ('Ingresá tu nombre');
   datosPersona.edad = (2024 - parseInt(prompt ('Ingresa año de nacimiento')));
   datosPersona.ciudad = prompt ('Ingresa tu ciudad de residencia');
   
   const interesJS = confirm('Te interesa JavaScript?');
   datosPersona.interesPorJs = interesJS ? 'si' : 'no';
   console.log (datosPersona);
   
 }
   
 function renderizarDatosUsuario() {
   /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
   obtenerDatosDelUsuario();
   /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
   
   document.querySelector('span');
   nombre. innerHTML = datosPersona. nombre;
   edad. innerHTML = parseInt (datosPersona .edad);
   ciudad. innerHTML = datosPersona. ciudad;
   javascript.innerHTML = datosPersona. interesPorJs;
   
 }
 function recorrerListadoYRenderizarTarjetas() {
   /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
   
 const materias = document.querySelector('#fila')
 materias.innerHTML = ""
 listado.forEach((materia) => {
   materias.innerHTML += `
     <div class="caja">
       <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
     <p class="lenguajes">${materia.lenguajes}</p>
     <p class="bimestre">${materia.bimestre}</p> 
   `
 })
 }
 function alternarColorTema() {
   /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
     
     document.querySelector('#sitio').classList.toggle("dark");
 }
 /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
 document.addEventListener('keydown', function(e) {
   if (e.code === 'KeyF' || (e.code === 'Keyf')) {
     document.querySelector('.oculto').style.visibility = 'visible';
   }
 });