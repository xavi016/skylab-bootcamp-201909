const fs = require('fs')
const path = require('path')

module.exports = function (pathText, extension, callback) {
    fs.readdir(path, 'utf8', (error, data) => {
        if (error) return callback(error, undefined)
        data.forEach((line) => {
            if (path.extname(line) === '.' + extension) callback(undefined, line)
        })
    })
}
