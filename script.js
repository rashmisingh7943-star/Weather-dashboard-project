// Initial JavaScript setup
const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city');
const output = document.getElementById('output');
const API_KEY = 'YOUR_API_KEY'; // Placeholder for API key
form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
    output.textContent = "Please enter a city name.";
    return;
}
output.textContent = "Loading...";
try {

    console.log(city);

} catch (error) {

    output.textContent = "Something went wrong.";

}
});
