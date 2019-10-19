function getDuck(id, body, callback) {
    request('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, body,callback)
}