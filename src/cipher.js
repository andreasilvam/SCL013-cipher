//const cipher = {
// ...

//se crea la funcion
const cipher = {
  encode :(string, offset) => { 
    //recorrido demuchas vueltas
    let offsetString = parseInt(offset);
    offsetString=(1092 + offset)%26;
    //se crea variable de resultado, queda vacia porque ira los nuevos valores
    let textoCifrado = "";
    //bucle desplazamiento de la letra 
    for (let i=0; i<string.length; i++){
      //se agrega el charCodeAt para convertir en ascii las letras
      let text = string.charCodeAt(i);
      //formula del cifrado y
      //condiciones
      if (65 <= text && text <= 90) {
        textoCifrado += String.fromCharCode((text -65 + offsetString)% 26 + 65);
      }
        else if (97 <= text && text <= 122){
          textoCifrado += String.fromCharCode((text - 97 + offsetString) % 26 + 97);
        }
        // textoCifrado+=string.charCodeAt(i);
      }
      return textoCifrado;
    },

    decode :(string, offset) => { 
      //recorrido demuchas vueltas
      let offsetString = parseInt(offset);
      offsetString=(1092 + offset)%26;
      //se crea variable de resultado, queda vacia porque ira los nuevos valores
      let textoCifrado = "";
      //bucle desplazamiento de la letra 
      for (let i=0; i<string.length; i++){
        //se agrega el charCodeAt para convertir en ascii las letras
        let text = string.charCodeAt(i);
        //formula del cifrado y
        //condiciones
        if (65 <= text && text <= 90) {
          textoCifrado += String.fromCharCode((text - 65 - offsetString) % 26 + 65);
        }
          else if (97 <= text && text <= 122){
            textoCifrado += String.fromCharCode((text - 97 - offsetString) % 26 + 97);
          }
          // textoCifrado+=string.charCodeAt(i);
        }
        return textoCifrado;
      }
    }
    
      export default cipher;
      
