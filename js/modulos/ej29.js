let numAsteriscos = (arr)=>{
    let cont =0
    for (let i of arr)(i==="*")?cont++:"";
    return cont
}
export default numAsteriscos