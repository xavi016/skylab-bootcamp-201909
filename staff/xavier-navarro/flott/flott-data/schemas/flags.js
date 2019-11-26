const { Schema } = require('mongoose')

module.exports = new Schema({
    fountain: {
        type: Boolean
    },
    supermarket: {
        type: Boolean
    },
    publicTransport: {
        type: Boolean
    },
    parking: {
        type: Boolean
    },
    publicTransport: {
        type: Boolean
    }
})