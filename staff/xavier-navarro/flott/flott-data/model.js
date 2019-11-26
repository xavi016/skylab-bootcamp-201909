 
const { model } = require('mongoose')
const { user, spot, socialMedia, flags } = require('./schemas')

module.exports = {
    User: model('User', user),
    Spot: model('Spot', spot),
    Socialmedia: model('Socialmedia', socialMedia),
    Flags: model('Flags', flags),
}