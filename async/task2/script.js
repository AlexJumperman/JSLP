function displayCountries(countries) {
    const container = document.getElementById('countries');
    container.innerHTML = '';
    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                    <h3>${country.name.common}</h3>
                    <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
                    <p><strong>Languages:</strong> ${Object.values(country.languages || {}).join(', ')}</p>
                `;
        container.appendChild(card);
    });
}

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(function(countries){
        displayCountries(countries);

        document.getElementById('search').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const filtered = countries.filter(c => c.name.common.toLowerCase().includes(query));
            displayCountries(filtered);
        });
    })
    .catch(e => console.log('Error fetching countries:', e))
