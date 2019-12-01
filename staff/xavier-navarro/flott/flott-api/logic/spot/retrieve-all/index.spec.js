require('dotenv').config()
const { env: { TEST_DB_URL } } = process
const { expect } = require('chai')
const { random, floor } = Math
const listSpots = require('.')
const { errors: { NotFoundError }, polyfills: { shuffle } } = require('flott-util')
const { database, ObjectId, models: { Spot, User } } = require('flott-data')
const bcrypt = require('bcryptjs')
const randomCoordinates = require('random-coordinates')

describe.only('logic - list spots', () => {
    
    before(() => database.connect(TEST_DB_URL))

    let id, _name, surname, email, username, password
    let spotname, description, longitude, latitude, spotModalities
    let userCoordinates, radius, spotName, sports, spotTags
    const insertions = []

    beforeEach(async() => {
        
        _name = `Cerdo-${random()}`
        surname = `Gordo-${random()}`
        email = `Email-${random()}@mail.com`
        username = `Username-${random()}`
        password = `Password-${random()}`
        hash = await bcrypt.hash(password, 10)
        
        await Promise.all([User.deleteMany(), Spot.deleteMany()])

        const user = await User.create({ name: _name, surname, email, username, password: hash })
        id = user.id

       

        for (let i = 0; i < 10; i++) {

            let coor = [41 + random(), 2 + random()]
            latitude = coor[1]
            longitude = coor[0]
        
            spotname = `new-spotname-${random()}`
            description = `description-${random()}`
            spotModalities = ['skate','longboard','roller','scooter','bmx']
            const numItems = floor(random() * spotModalities.length)
            spotModalities = spotModalities.shuffle().splice(0, numItems)

            const spot = {
                creator: id,
                name: `name-${random()}`,
                description: `description-${random()}`,
                location: { type: "Point", coordinates: [longitude, latitude] },
                modalities: spotModalities,
                tags: ['random', 'skate', 'word'],
                flag: {
                        fountain: false,
                        supermarket: false,
                        publicTransport: false,
                        parking: true
                    }
            }

            insertions.push(spot)
        }

        await Spot.insertMany(insertions)

    })

    it('should succeed on correct spot id', async () => {
        userCoordinates = [41+random(),2+random()]
        radius = 130000
        spotName = "Lukazhu"
        sports = ["skate","longboard"]
        spotTags = ["random"]
        
        const spots = await listSpots(userCoordinates, radius, spotName, sports, spotTags)
        console.log(spots)
    })


    after(() => Promise.all([User.deleteMany(), Spot.deleteMany()]).then(database.disconnect))
})
