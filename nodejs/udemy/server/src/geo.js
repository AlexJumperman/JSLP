const axios = require('axios');

const getLocation = function(city){
    return axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: {
                name: city,
                count: 1,
            }
        })
        .then(function({data}){
            const city = data.results[0];
            // console.log(city.name, city.country);
            return {
                lat: city.latitude,
                long: city.longitude
            }
        });
}

module.exports = {getLocation};