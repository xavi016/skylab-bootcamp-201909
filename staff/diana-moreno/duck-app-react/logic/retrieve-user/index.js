function retrieveUser(id, token, callback) {
  if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
  if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)

  call('GET', 'https://skylabcoders.herokuapp.com/api/user/' + id, { 'Authorization': 'Bearer ' + token }, undefined, result => {
    result.error ? callback(new Error(result.error)) : callback(result)
  })
}
