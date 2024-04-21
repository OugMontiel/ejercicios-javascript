let numeroDeCaracteres = (string,caracter)=>{
    let resultado =0
    for (let i=0;i<=string.length;i++){
        (string[i]===caracter)?resultado++:"";
    }

    return resultado
}
export default numeroDeCaracteres