const geo = require('./utils/geo.js');
const weather = require('./utils/weather.js');

geo.getLocation('Irpin')
    .then((result) => weather.getTemperature(result.lat, result.long))
    .then((result) => console.log(result));
