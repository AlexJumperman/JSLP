const axios = require('axios');

const getTemperature = function(lat, long){
    return axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: long,
                current_weather: true
            }
        })
        .then(function(response){
            return {
                temperature: response.data.current_weather.temperature,
                unit: response.data.current_weather_units.temperature
            }
        });
}

module.exports = {getTemperature};