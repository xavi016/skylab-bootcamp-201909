function toggleFavDuck(userId, userToken, duckId, callback) {


  /*  call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, {"Content-Type": "application/json", 'Authorization': 'Bearer ' + token}, { favs }, result => {
      result.error ? callback(new Error(result.error)) : callback(result)
    })*/

  call('GET', `https://skylabcoders.herokuapp.com/api/user/${id}`, { "Content-Type": "application/json", 'Authorization': 'Bearer ' + token }, undefined, result => {

    if (result.error) return callback(new Error(result.error))

    const { data: { favs = [] } } = result
    const index = favs.findIndex(fav => fav === duckId)
    index > -1 ? favs.splice(index, 1) : favs.push(duckId)

    call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, { "Content-Type": "application/json", 'Authorization': 'Bearer ' + token }, { favs }, result => {
      result.error ? callback(new Error(result.error)) : callback(result)
    })
  })

}