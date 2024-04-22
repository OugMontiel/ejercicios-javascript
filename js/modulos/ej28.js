let palabrasANumeros = (arr)=>{
    const numeros = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    let resultado=[]
    for (let i of arr){
        for (let j=0;j<numeros.length;j++){
            (i===numeros[j])?resultado.push(j):"";
        }
        (i in numeros)?resultado.push(-1):"";
    }
    return resultado
}
export default palabrasANumeros