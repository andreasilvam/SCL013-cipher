import cipher from './cipher.js';
let btnCodificar = document.getElementById('codificar');

  btnCodificar.addEventListener("click", function () {
  //guardar el mensaje con mayusculas
  let string = document.getElementById('mensaje1').value.toUpperCase();
//guardar el desplazamiento
  let offset = document.getElementById('number').value;

  let salidaTexto = document.getElementById("salidaTexto");

  //variable para guardar el vslor del input con desplazamiento 
  let resultado = cipher.encode (offset, string);
  salidaTexto.innerHTML= resultado;
  
  console.log(resultado);
  });
  
