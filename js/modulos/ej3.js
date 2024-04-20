let bmi = (peso, altura)=>{
    let bmi=peso/(altura*altura)
    if (bmi<18.5){
        return "Bajo de peso";
    }
    else if (bmi>18.5 && bmi<24.9){
        return "Normal";
    }
    else if (bmi>24.9 && bmi<29.9){
        return "Sobrepeso";
    }
    else if(bmi>18.5){
        return "Obeso";
    }
}
export default bmi