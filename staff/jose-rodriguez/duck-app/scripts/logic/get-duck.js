function getDuck(id, callback) {
    request('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, callback)
}