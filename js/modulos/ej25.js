let terminanConS = (arr)=>{
    let resultado =[]
    for (let i of arr){
        (i[i.length-1]==="s" || i[i.length-1]==="S")?resultado.push(i):"";
    }
    return resultado
}
export default terminanConS