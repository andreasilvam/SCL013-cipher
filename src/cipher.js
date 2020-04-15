const cipher = {
    encode :(offset, string) => {
        console.log(offset); 
        console.log(string);
        //obtener el mesaje, queda vacia porq ira los nuevos valores
        let textoCifrado = "";
        //bucle desplazamiento de la letra 
        for (let i=0; i<string.length; i++){
            console.log("paso1");
            //se agrega el charCodeAt para convertir en ascii las letras
            let text = string.charCodeAt(i);
            //formula del cifrado
            let string = ((((text - 65) + offset) % 26) + 65);
            console.log("paso2");
            // ahora de cifrado a letra
            textoCifrado = textoCifrado.fromCharCode(string);
            // resultado para cada indice se va a guardar en la variable textoCifrado
            textoCifrado = textoCifrado + string;
            
            
            return textoCifrado;
        }
    }
    //console.log(textoCifrado);
    
    
}

export default cipher;
