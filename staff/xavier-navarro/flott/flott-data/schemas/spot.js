const { Schema, ObjectId } = require('mongoose')
const Flags = require('./flags')
module.exports = new Schema({
    creator: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    modalities: [{
        type: String,
        enum: ['skate','longboard','roller','scooter','bmx'],
        required: true
    }],
    images: {
        type: Array
    },
    tags: {
        type: Array
    },
    flag: Flags,
    comments: [{
        type: ObjectId,
        ref: 'Comments'
    }],
    lastModification: {
        type: Date
    }
})

