const { Schema } = require('mongoose')
const { validators: { isEmail } } = require('flott-util')
const {socialMedia} = require('.')

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
    profileImage: {
        type: String,
    },
    socialMedia: [{
        type: socialMedia,
        required: true
    }],
    lastAccess: {
        type: Date
    }
})