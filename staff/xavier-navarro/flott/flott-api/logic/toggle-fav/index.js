// const { validate, errors: { NotFoundError, ContentError } } = require('upbeat-util')
// const { ObjectId, models: { User } } = require('upbeat-data')
// /**
// * Toggle fav
// * 
// * @param {string} userId
// * @param {string} spotId
// * 
// * @return {Promise}
// * @return {string}  id Returns the user id
// */
// module.exports = function (userId, spotId) {
//     validate.string(userId)
//     validate.string.notVoid('userId', userId)
//     if (!ObjectId.isValid(userId)) throw new ContentError(`${userId} is not a valid id`)
//     validate.string(spotId)
//     validate.string.notVoid('spotId', musicianId)
    
//     if (!ObjectId.isValid(spotId)) throw new ContentError(`${spotId} is not a valid id`)
//     return (async () => {
//         const user = await User.findById(userId)
//         if (!user) throw new NotFoundError(`user with id ${userId} not found`)
        
//         const favIndex = user.favs.indexOf(spotId)
//         if (favIndex === -1) {
//             user.favs.push(musicianId)
//         } else (
//             user.favs.splice(favIndex, 1)
//             )
        
//         await user.save()
        
//     })()
// }