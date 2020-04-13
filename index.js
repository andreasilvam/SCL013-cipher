import cipher from './cipher.js';
let codificar = document.getElementById("codificar")
 codificar.addEventListener("click", function () {
  //guardar el mensaje con mayusculas
  let guardarTexto = document.getElementById("mensaje1").value.toUpperCase();
  //guardar el desplazamiento
  let desplazamiento= document.getElementById("number");
  let salidaTexto = document.getElementById("salidaTexto");
  //variable para guardar el vslor del input con desplazamiento 
  let resultado = cipher.encode (desplazamiento, guardarTexto);
  salidaTexto.innerHTML= resultado;
  console.log(resultado)
  });
  
