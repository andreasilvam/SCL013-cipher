window.cipher = {
    encode :(string, offset) => {
        // console.log(offset); 
        //console.log(string);
        //recorrido demuchas vueltas
        let offsetString = parseInt(offset);
        offsetString=(1092 + offset)%26;
        //obtener el mesaje, queda vacia porq ira los nuevos valores
        let textoCifrado = "";
        //bucle desplazamiento de la letra 
        for (let i=0; i<string.length; i++){
            console.log("paso1");
            //se agrega el charCodeAt para convertir en ascii las letras
            let text = string.charCodeAt(i);
            //formula del cifrado y
            //condiciones
            if (65 <= text && text <= 90) {
                textoCifrado += String.fromCharCode((text -65 + offsetString)% 26 + 65);}
                else if (97 <= text && text <= 122){
                    textoCifrado += String.fromCharCode((text - 97 + offsetString) % 26 + 97);
                    break;
                }
                console.log("paso2");
               // textoCifrado+=string.charCodeAt(i);
            }
            return textoCifrado;
        }};
        export default cipher;
