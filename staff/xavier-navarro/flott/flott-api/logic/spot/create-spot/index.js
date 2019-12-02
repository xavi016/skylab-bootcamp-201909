const { validate, errors: { ConflictError } } = require('flott-util')
const { models: { Spot, Flag } } = require('flott-data')

/**
* Register spot
* 
* @param {string} creator
* @param {string} name
* @param {string} description
* @param {number} longitud
* @param {number} latitude
* @param {Array} modalities
* @param {string} images
* @param {array} tags
* @param {array} flags
* 
* @return {Promise}
* @return {string}  id Returns the user id
*/

module.exports = function (creator, name, description, longitude, latitude, modalities, tags, flags) {
    validate.string(creator)
    validate.string.notVoid('creator', creator)
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(description)
    validate.string.notVoid('description', description)
    validate.number(longitude, 'longitude')
    validate.number(latitude, 'latitude')
    validate.array(modalities)
    tags && validate.array(tags)
    validate.instanceOf(Object, flags)

    return (async () => {
        const flagsSpot = await new Flag(flags)
        const spot = await Spot.create({ creator, name, description, location: { type: "Point", coordinates: [longitude, latitude] }, modalities, tags, flag:flagsSpot })
        return spot.id
    })()
}