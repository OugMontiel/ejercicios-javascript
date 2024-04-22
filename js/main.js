import prompt from 'async-prompt'
import transcribir from './modulos/ej15.js'

// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"