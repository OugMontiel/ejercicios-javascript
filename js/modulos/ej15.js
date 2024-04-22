let transcribir = (cadena)=>{
    let resultados=[]
    for (let i=0;i<cadena.length;i++){
        (cadena[i]==="G")?resultados.push("C"):
        (cadena[i]==="C")?resultados.push("G"):
        (cadena[i]==="T")?resultados.push("A"):
        (cadena[i]==="A")?resultados.push("U"):
        resultados.push(cadena[i]);
    }
    return resultados
}

export default transcribir
