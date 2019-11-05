//console.log(process.argv)
const fs = require('fs')
var path = require('path')

const {argv:[,,folder]}= process
const extension = '.' + process.argv[3] //destructuring ?

function callback(err, list) {
  list.forEach(file => {
    const ext = path.extname(file)
    if(ext === extension) console.log(file)
  })
}

fs.readdir(folder, callback)
