// Soluccion 1 .. por medio de arr pero ña entreda tiene que ser un arr no argumentos

// let imprimirArreglo = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// export default imprimirArreglo

// Solucion 2 ... por medio de argunetos pero no por arr
let imprimirArreglo = (...args) => {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

export default imprimirArreglo;

// Solucion 3 .. pero las cosas se ponen raras

// function imprimirArreglo(arr){
//     arr.forEach(elemento=>{
//         console.log(elemento)
//     })
// }
// export default imprimirArreglo;