const { Schema } = require('mongoose')

module.exports = new Schema({
    name: {
        type: String
    },
    link: {
        type: String
    }
})