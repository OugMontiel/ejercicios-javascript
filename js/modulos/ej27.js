const numerosAPalabras = (arr)=>{
    let resultados=[];
    const Palabras=['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];

    for (let i = 0; i<arr.length; i++){

        resultados.push(Palabras[arr[i]])
    }

    return resultados

}
export default numerosAPalabras;