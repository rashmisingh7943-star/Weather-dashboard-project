// Initial JavaScript setup
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const output = document.getElementById('output');
const API_KEY = '69856d231a8813dc1086247428147fa7'; // Placeholder for API key
form.addEventListener("submit", async(event) => {
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

const data = await response.json();

output.innerHTML = `
    <h3>${data.name}</h3>
    <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].main}</p>
            <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>


`;

} catch (error) {

    output.textContent = "Something went wrong.";

}
});
