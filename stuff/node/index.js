const HJSON = require('hybrid-json')

// $ node . 3000 en Juanito

const { argv: [, , name] } = process

//console.log(JSON.parse(`{"name": '${name}'}`))
console.log(HJSON.parse(`{"name": '${name}'}`))


