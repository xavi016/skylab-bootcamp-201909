const http = require('http')

// $ node . http://google.com http://google.es http://google.it
const { argv: [, , ...urls] } = process

const outputs = []
let counter = 0

urls.forEach((url, index) => { 
    const request = http.get(url, response => { 
        response.setEncoding('utf8')

        response.on('error', error => { throw error })

        let content = ''

        response.on('data', chunk => content += chunk)

        response.on('end', () => {
            outputs[index] = content

            ++counter === urls.length && outputs.forEach(output => console.log(output))
        })
    })

    request.on('error', error => { throw error })
})

// const http = require('http')
// const bl = require('bl') // container of buffer => es un formato que parece a objecto en node.js 

// const urls = process.argv.splice(2).reverse()

// let total = []
// function httpGet(turn){
//     if(turn<0){
//         console.log(total.join('\n'))
//         return
//     }
//     http.get(urls[turn],function(resp){
//         resp.pipe(bl(function(err,data){
//             if(err){
//                 console.error(`error:${err.message}`)
//             }
//             total.push( data+'' )
//             httpGet(--turn)
//         }))
//     })
// }
// httpGet(2)