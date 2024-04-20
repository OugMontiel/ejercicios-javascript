let likes = (numero)=>{
    let resultado 

    if (numero>0 && numero<1000){return numero.toString();}
    else if (numero>=1000 && numero<1000000){ return numero.toString().slice(0,-3) + "K" }
    else if (numero>=1000000 && numero<1000000000){return numero.toString().slice(0,-6) + "M"}
    else {return "Numero Fuera de rango"}
}
export default likes