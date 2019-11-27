const { validate, errors: { CredentialsError } } = require('flott-util')
const { models: { User } } = require('flott-data')

/**
* Authenticate user
* 
* @param {string} name
* @param {string} surname 
* @param {string} email
* @param {string} username
* @param {string} password 
* @param {string} profileImage
* @param {string} socialMedia 
* 
* @throws {CredentialsError} If username or password doesn't match with the correct credentials
* 
* @return {Promise}
* @return {string}  id Returns the user id
*/

module.exports = function (username, password) {
    validate.string(username)
    validate.string.notVoid('username', username)
    validate.string(password)
    validate.string.notVoid('password', password)

    return (async () => {
        const user = await User.findOne({ username, password })

        if (!user) throw new CredentialsError('wrong credentials')

        user.lastAccess = new Date

        await user.save()

        return user.id
    })()
}
