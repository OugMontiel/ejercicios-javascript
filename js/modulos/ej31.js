let distancia = (texone, textwo)=>{
    let resultado =0
    for (let i =0;i<texone.length;i++)(texone[i]!==textwo[i])?resultado++:"";
    (texone.length!==textwo.length)?resultado+=Math.abs(texone.length-textwo.length):"";
    return resultado
}

export default distancia