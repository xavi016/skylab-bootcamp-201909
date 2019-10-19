function retrieveUser(id, token) {
    if (typeof id !== 'string') throw new TypeError(id +  ' is not a string');
    if (typeof token !== 'string') throw new TypeError(id +  ' is not a string');
    
    call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, function (result) {
        result.error ? callback(new Error(result.error)) : callback(undefined, result);
    });
    // TODO
}



//result es lo que guarda el JSON y lo parsea