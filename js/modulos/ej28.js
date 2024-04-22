let palabrasANumeros = (arr)=>{
    const numeros = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    let resultado=[]
    for (let i of arr){
        let bandera=true
        for (let j=0;j<numeros.length;j++){
            (i===numeros[j])?resultado.push(j)&& (bandera=false):"";
        }
        (bandera)?resultado.push(-1):"";
    }
    return resultado
}
export default palabrasANumeros