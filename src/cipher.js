const cipher = {
    encode :(offset, text) => {
        //obtener el mesaje
        let textoCifrado = "";
        let resultado = "";
        //bucle desplazamiento de la letra
        for (let i=0; i<text.length; i++){
            //se agrega el charCodeAt para convertir en ascii las letras
            let ascii= text.charCodeAt(i)
            //se agrega valor numero de desplazamiento
            ascii = ascii + offset;
            //solo si el ascii es menor o igual que 65 y despues si es menor o igual a 90
            if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)
            //formula para cambiar las letras
            {resultado+=String.fromCharCode((ascii+offset)+26)}

            return resultado;
            
            console.log(resultado)
           
        }
    }}
    export default cipher;
