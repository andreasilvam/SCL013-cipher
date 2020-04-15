const cipher = {
    encode :(offset, string) => {
        console.log(offset); 
        console.log(string);
        //obtener el mesaje
        let textoCifrado = "";
        //bucle desplazamiento de la letra
        for (let i=0; i<string.length; i++){
            console.log("paso1");
            //se agrega el charCodeAt para convertir en ascii las letras
            let ascii= string.charCodeAt(i);
            // formula para las letras mayusculas del ascii (en index ya converti en mayuscula el texto delmensaje 1)
            if ((ascii >= 65) && (ascii <= 122)){
                textoCifrado = string.fromCharCode((ascii - 65 + offset)% 26+ 65);
            }
                
                //formula
                textoCifrado=string.fromCharCode((ascii+offset)+26);
                
                return textoCifrado;
            }
        }
        console.log(textoCifrado);
        
        
    }
};
export default cipher;
