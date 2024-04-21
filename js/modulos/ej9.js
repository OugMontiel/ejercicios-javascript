let numeroDeAes = (string)=>{
    let resultado =0
    for (let i =0;i<string.length;i++){
        (string[i]==="a")?resultado++ : "";
    }
    return resultado
}

export default numeroDeAes