const http = require('http')
const {argv:[,,url]}= process
let str = ''

function callback(response) {
  response.setEncoding('utf8')
  response.on('data', function(chunk) {
    console.log(chunk)
    str += chunk
  })
}

const req = http.get(url, callback)
