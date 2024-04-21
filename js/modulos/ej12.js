let multiplicarArreglo = (arr)=>{
    let resultado=1 
    for (let i =1;i<arr.length;i++){
        resultado *= arr[i]
    }

    return resultado
}

export default multiplicarArreglo