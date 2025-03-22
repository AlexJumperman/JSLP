const form = document.getElementById('weather-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('/weather?address=' + document.getElementById('address-input').value)
        .then(result => result.json())
        .then(result => document.getElementById('weather-result').innerText = `Temperature: ${result.temperature} ${result.unit}`);
})