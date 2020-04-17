//import cipher from './cipher.js';
//console.log(cipher);*/

import cipher from './cipher.js';

/*Declaro variable const para llamar al boton codificar y let ya que 
reasigno valores al numero de desplazamiento y al mensaje, y realizo la expresión
document.getElementById para obtener el elemento por el id, estas id 
son de la caja de texto del mensaje, el numero de desplazamiento y 
los botones creados en el HTML*/

//Llamo al boton codificar
const btnCod =document.getElementById("codificar");
btnCod.addEventListener("click",() => {
  let string = document.getElementById("mensaje1").value.toUpperCase();
  
  let offset =  parseInt(document.getElementById("numb").value);
 
  //let resultado = document.getElementById("salidaTexto");
  document.getElementById("mensaje-codificado").innerHTML = cipher.encode (string,offset);
});

//Llamo al boton decodificar
const btnDecod =document.getElementById("decodificar");
btnDecod.addEventListener("click",() => {
  let string = document.getElementById("mensaje2").value.toUpperCase();
  
  let offset =  parseInt(document.getElementById("numb").value);
 
  //let resultado = document.getElementById("salidaTexto");
  document.getElementById("mensaje-codificado").innerHTML = cipher.decode (string,offset);
});

