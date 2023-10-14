document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '6440c5c5dab4ca3a400164ecfcf30c6e'; 
    const searchBtn = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    // Function to fetch weather data for a specific city
    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cityName.textContent = data.name;
                temperature.textContent = `Temperature: ${data.main.temp}°C`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                wind.textContent = `Wind: ${data.wind.speed} m/s`;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    // Add click event listener to the search button
    searchBtn.addEventListener('click', function () {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    // Initial weather information when the page loads
    fetchWeather('New York'); // Example: Fetch weather for New York by default
});