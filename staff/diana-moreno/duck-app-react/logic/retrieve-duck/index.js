function retrieveDuck(id, callback) {
  if (typeof id !== 'string') throw new TypeError(`${id} is not a string`)
  if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`)
  if (!id.trim().length) throw new ContentError('id is empty or blank')

/*  call('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id, undefined, undefined, result => {
    result.error ? callback(new Error(result.error)) : callback(undefined, result)
  })*/


}
