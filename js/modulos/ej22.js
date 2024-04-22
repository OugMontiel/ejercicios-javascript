let posiciones = (arr)=>{
    let resultado =[]
    for (let i=0;i<arr.length;i++){
        (arr[i]%2===0)?resultado.push(i):"";
    }
    return resultado
}
export default posiciones