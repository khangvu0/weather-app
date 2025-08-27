// Import request module to make HTTP requests
const request = require('request')

// Fetches the current weather using latitude & longitude
const forecast = (latitude, longitude, callback) => {
    const weatherAPIKey = ''
    const url = `https://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${latitude},${longitude}&units=f`

    // Makes an HTTP request to the Weatherstack API
    // json: true tells request to parse JSON response automatically
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (response.body.error){
            callback('Unable to connect to find location!', undefined)
        }
        else {
            callback(undefined, `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast