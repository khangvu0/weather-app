// Import request module to make HTTP requests
const request = require('request')

// Fetches the current weather using latitude & longitude
const forecast = (latitude, longitude, callback) => {
    const weatherAPIKey = '8cd92ab4f7212dc34ff3da34cbceda1d'
    const url = `https://api.weatherstack.com/current?access_key=${weatherAPIKey}&query=${latitude},${longitude}&units=f`

    // Makes an HTTP request to the Weatherstack API
    // json: true tells request to parse JSON response automatically
    request({ url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (body.error){
            callback('Unable to connect to find location!', undefined)
        }
        else {
            callback(
                undefined, 
                `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. 
                It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%`)
        }
    })
}

module.exports = forecast