function toggleFavDuck(userId, userToken, favorites, callback) {


/*  const favorites = []

  retrieveUser(userId, userToken, result => {
    if(result.favorites !== favorites) favorites.push(result.favorites)
  }) */

  console.log(favorites)


  call('PUT', 'https://skylabcoders.herokuapp.com/api/user/' + userId, {"Content-Type": "application/json", 'Authorization': 'Bearer ' + token}, { favs: favorites }, result => {
    result.error ? callback(new Error(result.error)) : callback(result)
  })
}
