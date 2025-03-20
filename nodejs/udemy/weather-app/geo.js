const axios = require('axios');

axios.get('https://geocoding-api.open-meteo.com/v1/search?name=Los%20Angeles&count=1')
    .then(function(response){
        // console.log(response.data);
        console.log(`It is currently ${response.data.current_weather.temperature}${response.data.current_weather_units.temperature}`)
    });