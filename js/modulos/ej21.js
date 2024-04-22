let pares = (arr)=>{
    let resultado =[]
    for (let i of arr){
        (i%2===0)?resultado.push(i):"";
    }
    return resultado
}
export default pares