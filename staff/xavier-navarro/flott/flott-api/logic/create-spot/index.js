const { validate, errors: { ConflictError } } = require('flott-util')
const { models: { Spot } } = require('flott-data')

/**
* Register spot
* 
* @param {string} name
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

module.exports = function (creator, name, description, longitude, latitude, modalities, images, tags, flags) {
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(description)
    validate.string.notVoid('description', description)
    validate.number(longitude, 'longitude')
    validate.number(latitude, 'latitude')
    validate.array(modalities)
    validate.array(tags)
    validate.array(flags)

    return (async () => {
        await Spot.create({ creator, name, description, location: { coordinates: [longitude, latitude] }, modalites, images, tags, falgs })
    })()
}