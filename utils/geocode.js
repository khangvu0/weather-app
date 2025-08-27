// Import request module to make HTTP requests
const request = require('request')

// Converts a location name into latitude and longitude
const geocode = (address, callback) => {
    const mapboxAccessToken = ''

    // encodeURIComponent ensures special characters in address don't break the URL
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxAccessToken}&limit=1`

    // Makes an HTTP request to the Mapbox API
    // json: true tells request to parse JSON response automatically
    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        }
        else if (response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode