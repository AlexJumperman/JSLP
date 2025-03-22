const path = require('path');
const express = require('express');
const geo = require('./src/geo.js')
const weather = require('./src/weather.js')

const app = express();

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('layout', {
        title: 'Home page',
        text: 'Home text'
    })
})

app.get('/weather', (req, res) => {
    const address = req.query.address;
    if(!address){
        return res.send({
            error: 'Address required!'
        })
    }
    geo.getLocation(address)
        .then(({lat, long}) => weather.getTemperature(lat, long))
        .then(result => res.send(result));
})

app.get('/help/*', (req, res) => {
    res.send('Help article not found');
})

app.get('*', (req, res) => {
    res.send('My 404 page');
})

app.listen(3000)