//your JS code here. If required.
// document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

// function getWeather() {
// 	const apiKey = 'YOUR_API_KEY';
// 	const city = 'London';
// 	const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';

// 	axios.get(apiUrl).then(response => { 
// 		const weatherDescription = response.data.weather[0].description);
// 		document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weatherDescription}`;
// 	})
// 	.catch(error => {
// 		console.error('There was a problem fetching the weather data:', error);
// 	}) 
// }

document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios.get(apiUrl)
        .then(response => {
            const weatherDescription = response.data.weather[0].description;
            document.getElementById('weatherData').innerText = `Current weather in ${city}: ${weatherDescription}`;
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
        });
}