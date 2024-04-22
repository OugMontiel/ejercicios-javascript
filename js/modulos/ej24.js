let empiezanConA = (arr)=>{
    let resultado =[]
    for (let i of arr){
        (i[0]==="a" || i[0]==="A")?resultado.push(i):"";
    }
    return resultado
}
export default empiezanConA