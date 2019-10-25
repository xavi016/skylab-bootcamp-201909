function retrieveFavDucks(id, token, callback) {
  if(typeof id !== 'string') throw new TypeError(`${id} is not a string`);
  if(typeof token !== 'string') throw new TypeError(`${token} is not a string`)

  call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, { "Content-Type": "application/json", 'Authorization': 'Bearer ' + token }, undefined, result => {

    if (result.error) return callback(new Error(result.error))
    const { data: { favs = [] } } = result
    let counter = 0, error

    if (favs.length) {
      favs.forEach((fav, i) => {
        call('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + favs[i], undefined, undefined, result2 => {
          if (result2.error) return callback(error = new Error(result2.error))

          favs[i] = result2

          if(++counter === favs.length) callback(undefined, favs) // this condicional solves to repeat the callback in each iteration
        })
      })
    } else {
      callback(undefined, favs)
    }
  })
}