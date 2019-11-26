 
const { model } = require('mongoose')
const { user, spot, socialmedia, flags } = require('./schemas')

module.exports = {
    User: model('User', user),
    Spot: model('Spot', spot),
    Socialmedia: model('Socialmedia', socialmedia),
    Flags: model('Flags', flags),
}