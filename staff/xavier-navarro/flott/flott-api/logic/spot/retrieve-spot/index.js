const { validate, errors: { NotFoundError, ContentError } } = require('flott-util')
const { ObjectId, models: { Spot, User } } = require('flott-data')

/**
* Retrieve spot
* 
* @param {string} id
* 
* @throws {ContentError} If id hasn't got the correct format
* 
* @throws {NotFoundError} If doesn't find the spot with the id
* 
* @return {Promise}
* @return {Object} object Returns an object with the spot information
*/

module.exports = function (id) {
    validate.string(id)
    validate.string.notVoid('id', id)
    if (!ObjectId.isValid(id)) throw new ContentError(`${id} is not a valid id`)

    return (async () => {
        const spot = await Spot.findById(id).populate('creator')

        if (!spot) throw new NotFoundError(`spot with id ${id} not found`)

        spot.lastModification = new Date

        await spot.save()

        const { creator : {  id: creatorId, name: creatorName, surname: creatorSurname, username: creatorUsername }, name, description, location: { coordinates }, modalities, tags, totalFavs, flag, lastModification } = spot
        const longitude = coordinates[0]
        const latitude = coordinates[1]
        return { id, creatorId, creatorName, creatorSurname, creatorUsername, name, description, longitude, latitude, modalities, tags, totalFavs, flag, lastModification }
    })()
}
