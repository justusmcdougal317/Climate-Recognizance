var button = document.getElementById('searchButton');
var inputValue = document.getElementById('cityInput');
var name = document.getElementById('cityName');
var desc = document.getElementById('description');
var temp = document.getElementById('temperature');

button.addEventListener('click', function () {
    var apiKey = '6440c5c5dab4ca3a400164ecfcf30c6e'; 
    var city = inputValue.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = `Weather in ${nameValue}`;
            temp.innerHTML = `Temperature: ${tempValue}°C`;
            desc.innerHTML = `Description: ${descValue}`;
        })
        .catch(err => {
            alert("Wrong city name or an error occurred!");
            console.error(err);
        });
});