// Initial JavaScript setup
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const output = document.getElementById('output');
const API_KEY = 'YOUR_API_KEY'; // Placeholder for API key
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    console.log(city);
});