// Initial JavaScript setup

const locationBtn = document.getElementById("location-btn");
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const output = document.getElementById("output");

const API_KEY = "69856d231a8813dc1086247428147fa7"; 

// Search by City
form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        output.textContent = "Please enter a city name.";
        return;
    }

    output.textContent = "Loading...";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        output.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">

            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>

            <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>

            <p><strong>Condition:</strong> ${data.weather[0].main}</p>

            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>

            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

        cityInput.value = "";

    } catch (error) {

        output.textContent = error.message;

    }

});


// Get Weather by Current Location

async function getWeatherByLocation(lat, lon) {

    output.textContent = "Loading...";

    try {

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Unable to fetch weather");
        }

        const data = await response.json();

        output.innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">

            <p><strong>Temperature:</strong> ${data.main.temp} °C</p>

            <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>

            <p><strong>Condition:</strong> ${data.weather[0].main}</p>

            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>

            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (error) {

        output.textContent = error.message;

    }

}


// Current Location Button

locationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        output.textContent = "Geolocation is not supported.";

        return;

    }

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            getWeatherByLocation(latitude, longitude);

        },

        () => {

            output.textContent = "Location access denied.";

        }

    );

});