// Import self-made modules from utils directory
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address');
}
else {
    // Calls geocode function from geocode.js
    // ={} for when an error occurs, can't destructure off undefined 
    geocode(address, (error, { latitude, longitude, location } = {}) => {
    if(error) {
        return console.log(error)
    }
        // Calls forecast function from forecast.js
        forecast(latitude, longitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
    
            console.log(location);
            console.log(forecastData);
        })
    })
}
