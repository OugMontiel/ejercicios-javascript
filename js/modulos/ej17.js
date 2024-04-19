let campitalizarPalabra = (palabra)=>{

    const x = palabra.split(" ");
    for (let i=0;i < x.length ;i++){
        x[i] = x[i].charAT(0).ToUpperCase() + x[i].slice(1);

    }

    const y = x.join(" ");

    return y;

}

export default campitalizarPalabra