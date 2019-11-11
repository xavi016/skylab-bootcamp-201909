const { expect } = require('chai')
const call = require('../../helpers/call')
const retrieveDuck = require('.')

describe.skip('logic - search ducks', () => {
    let name, surname, email, password, id, token, duckId = '5c3853aebd1bde8520e66e1b'

    beforeEach(done => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@mail.com`
        password = `password-${Math.random()}`

        call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password }, result => {
            if (result.error) done(new Error(result.error))
            else {
                call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/auth', { username: email, password }, result => {
                    if (result.error) done(new Error(result.error))
                    else {
                        const { data } = result

                        id = data.id
                        token = data.token

                        done()
                    }
                })
            }
        })
    })

    it('should succeed on correct criteria (query)', () => {
debugger
        return retrieveDuck(id, token, duckId)
            .then(duck => {
                debugger
                expect(duck).to.exist
                expect(duck.id).to.equal(id)

                expect(duck.title).to.exist
                expect(typeof duck.title).to.equal('string')
                expect(duck.title.length).to.be.greaterThan(0)

                expect(duck.imageUrl).to.exist
                expect(typeof duck.imageUrl).to.equal('string')
                expect(duck.imageUrl.length).to.be.greaterThan(0)

                expect(duck.description).to.exist
                expect(typeof duck.description).to.equal('string')
                expect(duck.description.length).to.be.greaterThan(0)

                expect(duck.link).to.exist
                expect(typeof duck.link).to.equal('string')
                expect(duck.link.length).to.be.greaterThan(0)

                expect(duck.price).to.exist
                expect(typeof duck.price).to.equal('string')
                expect(duck.price.length).to.be.greaterThan(0)
                expect(duck.isFav).to.be.false
            })
    })

    // it('should fail on incorrect criteria', () => {
    //     const query = 'fsdfsfew'

    //     return searchDucks(id, token, query)
    //         .then(() => {
    //             throw Error('should not reach this point')
    //         })
    //         .catch(error => {
    //             expect(error).to.exist

    //             expect(error.message).to.exist
    //             expect(typeof error.message).to.equal('string')
    //             expect(error.message.length).to.be.greaterThan(0)
    //             expect(error.message).to.equal(`There are not results for this query: ${query}`)
    //         })
    // })

    // it('should fail on incorrect query or expression types', () => {
    //     expect(() => { searchDucks(id, token, 1) }).to.throw(TypeError, '1 is not a string')
    //     expect(() => { searchDucks(id, token, true) }).to.throw(TypeError, 'true is not a string')
    //     expect(() => { searchDucks(id, token, []) }).to.throw(TypeError, ' is not a string')
    //     expect(() => { searchDucks(id, token, {}) }).to.throw(TypeError, '[object Object] is not a string')
    //     expect(() => { searchDucks(id, token, undefined) }).to.throw(TypeError, 'undefined is not a string')
    //     expect(() => { searchDucks(id, token, null) }).to.throw(TypeError, 'null is not a string')
    // })
})