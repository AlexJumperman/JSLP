const axios = require('axios');

const getLocation = function(city){
    return axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: {
                name: city,
                count: 1,
            }
        })
        .then(function(response){
            const city = response.data.results[0];
            return {
                'lat': city.latitude,
                'long': city.longitude
            }
        });
}

module.exports = {getLocation};