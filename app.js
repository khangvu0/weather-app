// Import self-made modules from utils directory
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log('Please provide an address');
}
else {
    // Calls geocode function from geocode.js
    geocode(address, (error, data) => {
    if(error) {
        return console.log(error)
    }
        // Calls forecast function from forecast.js
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error) {
                return console.log(error);
            }
    
            console.log(data.location);
            console.log(forecastData);
        })
    })
}
