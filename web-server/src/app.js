const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Khang Vu'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Khang Vu'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Khang Vu',
        helpText: 'This is some helpful text.'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send( { error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // res.send({
    //     forecast: 'It is sunny',
    //     location: 'North Carolina',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query);
    res.send({
        products: []
    })
}) 

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Khang Vu',
        errorMessage: 'Help article not found.'
    })
}) 

// * = everything is a match, by being at the end it acts for any other route than above
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Khang Vu',
        errorMessage: 'Page not found.'
    })
})

// When someone visits the homepage/root, this function describes what to send back to them
// app.get('/help', (req,res) => {
//     // Render an html page
//     // Express will detect we have provided an object
//     // it is automatically going to stringify the JSON for us
//     // and it's going to get sent to the requester correctly
//     res.send({
//         name: 'Andrew',
//         age: 27
//     })
// })

// app.get('/about', (req,res) => {
//     res.send('<h1>About</h1>')
// })


// Starts up the server and listens on specific port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})