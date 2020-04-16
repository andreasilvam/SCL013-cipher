import cipher from './cipher.js';

const btnCod =document.getElementById("codificar");
btnCod.addEventListener("click",() => {
  let string = document.getElementById("mensaje1").value.toUpperCase();
  console.log (string);
  let offset =  parseInt(document.getElementById("numb").value);
  console.log (offset);
  //let resultado = document.getElementById("salidaTexto");
  document.getElementById("mensaje-codificado").innerHTML = cipher.encode (string,offset);
});
