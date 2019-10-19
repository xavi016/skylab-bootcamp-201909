function searchDucks (query,body,callback) {
    request('GET', query ? 'https://duckling-api.herokuapp.com/api/search?q=' + query : 'https://duckling-api.herokuapp.com/api/search?q=', body,callback);
}