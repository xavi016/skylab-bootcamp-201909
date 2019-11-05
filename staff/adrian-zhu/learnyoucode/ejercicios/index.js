// 1. Hello Jorge 

// console.log(`Hello ${process.argv[2]}!`) 

// node index.js process.argv[2] => josé jorge

// --

// 2. Casos de destructuring

// const {argv: [,,name] } = process
// debugger
// console.log(`Hello, ${name}!`) // + node index.js José, Hello, José!

// 3. node debug index.js Pepito ??
// Stepping Command reference => https://nodejs.org/api/debugger.html

// const {argv: [,,name] } = process
// debugger
// console.log(`Hello, ${name}!`) // + node index.js José, Hello, José!

// 4. node => setTimeout (()=> console.log('hola mundo'), 3000) => hola mundo

// 5. node => global

// 6. node => global.Math.PI

// 7. node => no hay xhr (new XMLHttpRequest) no hay DOM como browser por tanto al instante no funciona pero se puede conseguir las funcionalidades de tal aplicando las librerias;

// 8. node => pid

// 9. $ node index.js Pepito

// Hello Pepito!

// const {argv: [,,name] } = process

// console.log(`Hello, ${name}!`) // + node index.js José, Hello, José!

// 10.

const salute = require('./salute')
const {argv: [,,lang, name] } = process

console.log(salute(lang, name)); // node . en Fulanito
