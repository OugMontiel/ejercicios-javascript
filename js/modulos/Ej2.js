const calcularImpuestos = (edad,ingreso)=>(edad >=18 && ingreso>=1000)?(ingreso*0.4): 0n

export default calcularImpuestos