const http = require('http')
const bl = require('bl') // container of buffer => es un formato que parece a objecto en node.js 

const urls = process.argv.splice(2).reverse()

let total = []
function httpGet(turn){
    if(turn<0){
        console.log(total.join('\n'))
        return
    }
    http.get(urls[turn],function(resp){
        resp.pipe(bl(function(err,data){
            if(err){
                console.error(`error:${err.message}`)
            }
            total.push( data+'' )
            httpGet(--turn)
        }))
    })
}
httpGet(2)


// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }
