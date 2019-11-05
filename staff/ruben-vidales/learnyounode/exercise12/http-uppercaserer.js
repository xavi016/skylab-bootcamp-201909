const http = require('http')
const map = require('through2-map')

const { argv: [, , port] } = process

const server = http.createServer((req, res) => {
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        //body = Buffer.concat(body).toString();
        console.log(body)
    });
})
server.listen(port)
