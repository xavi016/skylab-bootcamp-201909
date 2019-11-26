const { Schema } = require('mongoose')
const { flags } = require('.')

module.exports = new Schema({
    creator: {
        type: ObjectId,
        ref: 'User',
        required: true
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
    modalities: {
        type: array,
        enum: ['skate','longboard','roller','scooter','bmx'],
        required: true
    },
    images: {
        type: array,
        required: true
    },
    tags: {
        type: array
    },
    flags: {
        type: flags,
        required: true
    },
    lastModification: {
        type: Date
    }
})

