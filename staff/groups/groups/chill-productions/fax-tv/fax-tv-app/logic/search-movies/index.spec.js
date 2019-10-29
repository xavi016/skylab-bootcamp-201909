describe('logic - search movies', () => {
    let name, surname, email, password, id, token, movieId = '5c3853aebd1bde8520e66e1b'

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

    it('should succeed on correct criteria (query)', done => {
        const query = 'blade runner'

        searchMovies(id, token, query, (error, movies) => {
            expect(error).toBeUndefined()

            expect(movies).toBeDefined()
            expect(movies.length).toBeGreaterThan(0)

            movies.forEach(function (movie) { 
                expect(movie).toBeDefined()
                expect(typeof movie.id).toBe('number')
                
                if(movie.title !== null){
                    expect(movie.title).toBeDefined()
                    expect(typeof movie.title).toBe('string')
                    expect(movie.title.length).toBeGreaterThan(0)
                }
                if(movie.poster_path !== null){
                    expect(movie.poster_path).toBeDefined()
                    expect(typeof movie.poster_path).toBe('string')
                    expect(movie.poster_path.length).toBeGreaterThan(0)
                }
                if(movie.release_date === 'string'){     
                    let a = movie.release_date    
                    expect(movie.release_date).toBeDefined()
                    expect(typeof movie.release_date).toBe('string')
                    expect(movie.release_date.length).toBeGreaterThan(0)
                }
                if(movie.release_date !== null){
                    expect(movie.overview).toBeDefined()
                    expect(typeof movie.overview).toBe('string')
                    expect(movie.overview.length).toBeGreaterThan(0)
                }
                if(movie.vote_average !== null){
                    expect(movie.vote_average).toBeDefined()
                    expect(typeof movie.vote_average).toBe('number')
                }

                expect(movie.isFav).toBeFalsy()
            })

            done()
        })
    })

/*     describe('when fav already exists', () => {
        beforeEach(done => {
            call('PUT', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, { favs: [movieId] }, result => {
                result.error ? done(new Error(result.error)) : done()
            })
        })

        it('should succeed on correct criteria (query)', done => {
            const query = 'blue'

            searchMovies(id, token, query, (error, movies) => {
                expect(error).toBeUndefined()

                expect(movies).toBeDefined()
                expect(movies.length).toBeGreaterThan(0)

                const hasFav = movies.some(movie => movie.isFav)

                expect(hasFav).toBeTruthy()

                movies.forEach(function (movie) {
                    expect(movie).toBeDefined()
                    expect(typeof movie.id).toBe('string')
                    expect(movie.id.length).toBeGreaterThan(0)

                    expect(movie.title).toBeDefined()
                    expect(typeof movie.title).toBe('string')
                    expect(movie.title.length).toBeGreaterThan(0)

                    expect(movie.image).toBeDefined()
                    expect(typeof movie.image).toBe('string')
                    expect(movie.image.length).toBeGreaterThan(0)

                    expect(movie.price).toBeDefined()
                    expect(typeof movie.price).toBe('string')
                    expect(movie.price.length).toBeGreaterThan(0)

                    movie.id === movieId ? expect(movie.isFav).toBeTruthy() : expect(movie.isFav).toBeFalsy()
                })

                done()
            })
        })
    }) */


    it('should fail on incorrect query or expression types', () => {
        // TODO cases when id and token have values diff from non-empty string
        
        expect(() => { searchMovies(id, token, 1) }).toThrowError(TypeError, '1 is not a string')
        expect(() => { searchMovies(id, token, true) }).toThrowError(TypeError, 'true is not a string')
        expect(() => { searchMovies(id, token, []) }).toThrowError(TypeError, ' is not a string')
        expect(() => { searchMovies(id, token, {}) }).toThrowError(TypeError, '[object Object] is not a string')
        expect(() => { searchMovies(id, token, undefined) }).toThrowError(TypeError, 'undefined is not a string')
        expect(() => { searchMovies(id, token, null) }).toThrowError(TypeError, 'null is not a string')
        expect(() => { searchMovies(id, token, '') }).toThrowError(ContentError, 'query is empty or blank')

        expect(() => { searchMovies(id, token, 'red', 1) }).toThrowError(TypeError, '1 is not a function')
        expect(() => { searchMovies(id, token, 'red', true) }).toThrowError(TypeError, 'true is not a function')
        expect(() => { searchMovies(id, token, 'red', []) }).toThrowError(TypeError, ' is not a function')
        expect(() => { searchMovies(id, token, 'red', {}) }).toThrowError(TypeError, '[object Object] is not a function')
        expect(() => { searchMovies(id, token, 'red', undefined) }).toThrowError(TypeError, 'undefined is not a function')
        expect(() => { searchMovies(id, token, 'red', null) }).toThrowError(TypeError, 'null is not a function')
    })
})