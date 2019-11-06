const http = require('http'), bl = require('bl'), { argv: [, , url1, url2, url3] } = process

let result = []
let index = 0

http.get(url1, response => {
    debugger
    response.on('error', error => { throw error })
    response.pipe(bl((error, data) => {
        if (error) throw error
        result[0] = data.toString()
        index++
        if (index === 3) console.log(result)
    }))
})

http.get(url2, response => {
    response.on('error', error => { throw error })
    response.pipe(bl((error, data) => {
             if (error) throw error
             result[1] = data.toString()
             index++
             if (index === 3) console.log(result)
         }))
})

http.get(url3, response => {
    response.on('error', error => { throw error })
    response.pipe(bl((error, data) => {
        if (error) throw error
        result[2] = data.toString()
        index++
        if (index === 3) console.log(result)
    }))

})
