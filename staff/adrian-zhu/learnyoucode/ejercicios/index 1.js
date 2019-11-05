// 1. fs

const fs = require('fs') 

const {argv: [,,name] } = process

// siempre se aconseja a trabajar en asyncrono

// 1.1 un ejemplo de syncrono: writeFIleSync, los metodos syncrono están actualizados normalmente

// fs.writeFileSync(`hello-${name.toLocaleLowerCase()}.txt`, `Hello, ${name} !`)

// console.log('Hello')

// 1.2 asyncrono: writeFile

fs.writeFile(`hello-${name.toLocaleLowerCase()}.txt`, `Hello, ${name} !`, error =>{
    if(error) throw error
    console.log('file written')
})

console.log('hello')