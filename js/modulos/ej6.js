let fizzBuzz = (numero)=>{
    return (numero % 3 === 0 && numero % 5 === 0) ? "FizzBuzz" : (numero % 3 === 0) ? "Fizz" : (numero % 5 === 0) ? "Buzz" : numero;
}
export default fizzBuzz