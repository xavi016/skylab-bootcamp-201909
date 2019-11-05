// const http = require('http');
// http.get(process.argv[2], (response) => {
//     const result = '';
//     response.setEncoding('utf8');
//     response.on('data',(data) => {
//         result += data;
//     });
//     response.on('end', () => {
//         console.log(result.length);
//         console.log(result);
//     });
// });

const http = require('http')
const bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})