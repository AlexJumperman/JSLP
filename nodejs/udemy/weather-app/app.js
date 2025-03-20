const geo = require('./utils/geo.js');
const weather = require('./utils/weather.js');

geo.getLocation(process.argv[2])
    .then(({lat, long}) => weather.getTemperature(lat, long))
    .then(result => console.log(result));
