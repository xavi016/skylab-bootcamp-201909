const http = require('http')
const fs = require('fs')

const { argv: [, , port, pathFile] } = process

const server = http.createServer((req, res) => {
    let readStream = fs.createReadStream(pathFile);
    readStream.on('open', () => {
        readStream.pipe(res)
    })
})
server.listen(port)
/*
//Learnyounode proposal

'use strict'
const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
 */