let password = (cadena)=>{
    let resultado =""
    for (let i=0;i<cadena.length;i++){
        resultado+=(
            (cadena[i]===cadena[i].toUpperCase())?cadena[i].toLowerCase():
            (cadena[i]===" ")?"":
            (cadena[i]==="a")?"4":
            (cadena[i]==="e")?"3":
            (cadena[i]==="i")?"1":
            (cadena[i]==="o")?"0":
            cadena[i]
        );
    }

    return resultado
}

export default password