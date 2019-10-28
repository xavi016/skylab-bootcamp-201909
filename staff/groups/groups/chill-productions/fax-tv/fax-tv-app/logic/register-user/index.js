function registerUser(name, surname, email, password, callback) {
    const favorites = [], rating = []
    validate.string(name)
    validate.string.notVoid('name',name)
    validate.string(surname)
    validate.string.notVoid('surname',surname)
    validate.string(email)
    validate.string.notVoid('email',email)
    validate.string(password)
    validate.string.notVoid('password',password)
    validate.array(favorites)
    validate.array(rating)
    validate.function(callback)
    //if (typeof name !== 'string') throw new TypeError(name + ' is not a string')
    //if (!name.trim().length) throw new ContentError('name is empty or blank')
    //if (typeof surname !== 'string') throw new TypeError(surname + ' is not a string')
    //if (!surname.trim().length) throw new ContentError('surname is empty or blank')
    //if (typeof email !== 'string') throw new TypeError(email + ' is not a string')
    //if (!email.trim().length) throw new ContentError('e-mail is empty or blank')
    //if (typeof password !== 'string') throw new TypeError(password + ' is not a string')
    //if (!password.trim().length) throw new ContentError('password is empty or blank')
    //if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    call('POST', undefined, 'https://skylabcoders.herokuapp.com/api/user', { name, surname, username: email, password, favorites, rating }, result => {
        result.error ? callback(new Error(result.error)) : callback();
    })
}