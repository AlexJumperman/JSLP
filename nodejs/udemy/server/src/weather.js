const axios = require('axios');

const getTemperature = function(lat, long){
    return axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude: lat,
                longitude: long,
                current_weather: true
            }
        })
        .then(function({data}){
            return {
                temperature: data.current_weather.temperature,
                unit: data.current_weather_units.temperature
            }
        });
}

module.exports = {getTemperature};