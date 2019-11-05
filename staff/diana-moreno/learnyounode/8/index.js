const http = require('http')
const {argv:[,,url]}= process
let str = ''

function callback(response) {
  response.setEncoding('utf8')
  response.on('data', function(chunk) {
    str += chunk
  })
  response.on('end', function() {
    console.log(str.length)
    console.log(str)
  })
}

const req = http.get(url, callback).end()
