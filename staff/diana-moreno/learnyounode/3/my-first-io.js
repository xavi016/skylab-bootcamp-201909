const fs = require('fs')
//console.log(process.argv)

console.log(fs.readFileSync(process.argv[2]).toString().split('\n').length-1)




//console.log(process.argv)
const fs = require('fs')
const {argv:[,,path]}= process

function callback(err, data) {
  console.log(data.split('\n').length-1)
  return data.toString().split('\n').length-1
}

fs.readFile(path,'utf8', callback)
