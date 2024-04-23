let numAsteriscos = (matrix)=>{
    let resultado =0
    for (let i of matrix){for (let j of i)(j==="*")?resultado++:"";}
    return resultado
}

export default numAsteriscos