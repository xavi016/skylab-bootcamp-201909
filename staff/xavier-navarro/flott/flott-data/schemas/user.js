const { Schema } = require('mongoose')
const { validators: { isEmail } } = require('flott-util')
const { social } = require('./')

module.exports = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: isEmail
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    modalities: [{
        type: String,
        enum: ['skate','longboard','roller','scooter','bmx']
    }],
    profileImage: {
        type: String
    },
    socialMedia: {
        type: [social]
    },
    lastAccess: {
        type: Date
    }
})