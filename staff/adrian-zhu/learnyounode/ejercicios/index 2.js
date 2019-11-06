const deley = require('./delaly')
const salute = require('./salute')

const {argv: [,,mills, lang, name] } = process

// node . 3000 en juanito

delay(Number(mills), ()=> console.log(salute(lang, name)))