// require('dotenv').config()
// const { env: { TEST_DB_URL } } = process
// const { expect } = require('chai')
// const registerUser = require('.')
// const { random } = Math
// const { errors: { ContentError } } = require('flott-util')
// const { database, models: { Spot } } = require('flott-data')

// describe('logic - register spot', () => {
//     before(() => database.connect(TEST_DB_URL))

//     let creator, name, description, longitude, latitude, modalities, images, tags, flags

//     beforeEach(() => {
//         name = `name-${random()}`
//         description = `surname-${random()}`
//         longitude = `email-${random()}@mail.com`
//         latitude = `username-${random()}`
//         modalities = `password-${random()}`

//         return Spot.deleteMany()
//     })

//     it('should succeed on correct credentials', async () => {
//         const response = await registerUser(name, surname, email, username, password)

//         expect(response).to.be.undefined

//         const user = await User.findOne({ username })

//         expect(user).to.exist

//         expect(user.name).to.equal(name)
//         expect(user.surname).to.equal(surname)
//         expect(user.email).to.equal(email)
//         expect(user.username).to.equal(username)
//         expect(user.password).to.equal(password)
//     })


//     it('should fail on incorrect name, surname, email, password, or expression type and content', () => {
//         expect(() => registerUser(1)).to.throw(TypeError, '1 is not a string')
//         expect(() => registerUser(true)).to.throw(TypeError, 'true is not a string')
//         expect(() => registerUser([])).to.throw(TypeError, ' is not a string')
//         expect(() => registerUser({})).to.throw(TypeError, '[object Object] is not a string')
//         expect(() => registerUser(undefined)).to.throw(TypeError, 'undefined is not a string')
//         expect(() => registerUser(null)).to.throw(TypeError, 'null is not a string')

//     })

//     after(() => User.deleteMany().then(database.disconnect))
// })
