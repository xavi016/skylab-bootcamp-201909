const http = require('http')
//const {argv:[,,url1, url2, url3]}= process
let arr = []

function callback(response) {
  response.setEncoding('utf8')
  let str = ''

  response.on('data', function(chunk) {
    str += chunk
  })

  response.on('end', function() {
    arr.push(str)
  })
  arr.forEach(elem => console.log(elem))
}

for(let i = 2; i < process.argv.length; i++) {
  http.get(process.argv[i], callback).end()
}

/*
official solution:

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3)
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)*/