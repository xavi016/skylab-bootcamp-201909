function searchMovies(id, token, query, callback) { 
    

    validate.string(id)
    validate.string.notVoid('id',id)
    validate.string(token)
    validate.string.notVoid('token',token)
    validate.string(query)
    validate.string.notVoid('query',query)
    validate.function(callback)

    let url = 'https://api.themoviedb.org/3/search/movie?api_key=6ce203b8e2cd4e788e8a3222ce05dfc8&query=' + query
    
    call('GET', undefined, url, undefined, result => {
        if (result.errors) return callback(new Error(result.errors))

        call('GET', token, `https://skylabcoders.herokuapp.com/api/user/${id}`, undefined, result2 => {
            if (result2.error) return callback(new Error(result2.error))

             const { data: { favorites = [] } } = result2

            result.results.forEach(movie => {
                   
                movie.isFav = favorites.includes(movie.id)
            }) 

            callback(undefined, result.results)
        })
    })
}