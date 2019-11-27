const { validate, errors: { ConflictError } } = require('flott-util')
const { models: { User } } = require('flott-data')

/**
* Register user
* 
* @param {string} name
* @param {string} surname 
* @param {string} email
* @param {string} username
* @param {string} password 
* @param {string} profileImage
* @param {string} socialMedia 
* 
* @throws {ConflictError} If exist another user with the same username.
* 
* @return {Promise}
* @return {string}  id Returns the user id
*/

module.exports = function (name, surname, email, username, password, profileImage, socialMedia) {
    validate.string(name)
    validate.string.notVoid('name', name)
    validate.string(surname)
    validate.string.notVoid('surname', surname)
    validate.string(email)
    validate.string.notVoid('e-mail', email)
    validate.email(email)
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return (async () => {
        const user = await User.findOne({ username })

        if (user) throw new ConflictError(`user with username ${username} already exists`)

        await User.create({ name, surname, email, username, password })
    })()
}
