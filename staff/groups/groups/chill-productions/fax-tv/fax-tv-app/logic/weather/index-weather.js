/**Function that return Json of info to API weather
 * @param {number} latitude latitude of city
 * @param {number} longitude longitude of city
 * @return {Object} Json whit the info of API
 */

function getWeather(latitude, longitude, callback){ 

    if(latitude === undefined) latitude = 41.398679
    if(longitude === undefined) longitude = 2.199960

    validate.function(callback)

    const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/993b369171584baeb14fed074ca98282/${latitude},${longitude}`
    
    call('GET', undefined, url, undefined, result => { 
        if (result.error) return callback(new Error(result.error))

        callback(undefined, result.currently)
    })
}