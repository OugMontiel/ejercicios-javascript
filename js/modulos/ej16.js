let capitalizar = (cadena)=>{
    let resultado =""
    for (let i =0;i<cadena.length;i++){
        resultado += (i===0)?cadena[i].toUpperCase():cadena[i];
    }
    return resultado
}

export default capitalizar