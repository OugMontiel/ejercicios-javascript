import prompt from 'async-prompt'
import numAsteriscos from './modulos/ej29.js'

// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0