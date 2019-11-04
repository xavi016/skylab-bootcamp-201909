const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], (error, data) => {
    if(error) throw error

})