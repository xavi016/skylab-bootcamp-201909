function searchDucks (query,callback) {
    request('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search?q=', callback);
}