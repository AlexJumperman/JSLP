const axios = require('axios');

// axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&current_weather=true')
//     .then(function(response){
//         // console.log(response.data);
//         console.log(`It is currently ${response.data.current_weather.temperature}${response.data.current_weather_units.temperature}`)
//     });

axios.get('https://geocoding-api.open-meteo.com/v1/search?name=Los%20Angeles&count=0')
    .then(function(response){
        const city = response.data.results[0];
        console.log(city.latitude, city.longitude);
    })
    .catch(function(e){
        if(!e.response){
            console.log('Service unavailable')
        }else{
            console.log(e.response.data);
        }
    });