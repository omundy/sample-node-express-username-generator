/**
 *	Generator module - Methods to return new name
 */


const words = require('./data/words');
const Functions = require('./functions');
const locations = require('./data/locations');
var fetch = require('node-fetch');

var exports = module.exports = {};



/**
 *	Return a new username
 */
exports.generateUsername = async (cityIndex) => {

	// random adjective, noun, 2 digit number (as string)
	let adjective = words.adjectives[Functions.getRandomInt(0, words.adjectives.length)];
	let animal = words.animals[Functions.getRandomInt(0, words.animals.length)];
	let number = String(Functions.getRandomInt(0, 9)) + String(Functions.getRandomInt(0, 9));

	// the object to return to the API, everything except username is null by default
	// username (default): name1 + name2 + number
    // username (weather): weather + name2 + temperature
	let response = {
		username: adjective.toLowerCase() + animal.toLowerCase() + number,
		weather: null,
		temp: null
	};

	// wrap things that might fail (APIs, etc.) inside a try/catch
	// more info: https://javascript.info/promise-error-handling
	try {
		// console.log("cityIndex =", cityIndex);

		// if cityIndex was set by user
		if (cityIndex != null & cityIndex >= 0) {
			console.log("🌧 getting the weather");

			// wait for the forecast url
			let forecastUrl = await getWeatherForecastUrl(
				locations.cities[cityIndex].lat,
				locations.cities[cityIndex].lng
			);
			if (forecastUrl != null) {
				console.log("forecastUrl =", forecastUrl);
				// wait for the forecast
				let [weather, temp] = await getWeatherForecast(forecastUrl);

				response.username = weather.toLowerCase() + animal.toLowerCase() + temp;
				response.weather = weather.toLowerCase();
				response.temp = temp;

				// return to route
				return response;
			}
		}
		// (else) if no cityIndex set, return default username to route
		return response;

	} catch (err) {
		console.error(err);
		// if error return all the null values so client can show *something* happened
		return response;
	}
};

/**
 *	Get the forecast as one word + one temp
 */
async function getWeatherForecast(url) {

	let word = "",
		temp = 0;

	// test
	// url = "https://api.weather.gov/gridpoints/GSP/116,76/forecast";

	// return the result after fetch completes
	return fetch(url)
		.then(Functions.handleErrors)
		.then(res => res.json()) // transform string to JSON object
		.then(json => { // handle json object
			// make sure data is available
			if (json && json.properties && json.properties.periods && json.properties.periods.length > 0) {
				// overwrite with new values
				word = json.properties.periods[0].shortForecast;
				temp = json.properties.periods[0].temperature;
			}
			// make sure there are no spaces
			if (word.includes(" ")) {
				word = word.split(" ").splice(-1)[0];
			}
			console.log(word, temp);

			return [word, temp];
		})
		.catch(error => {
			throw new Error("getWeatherForecast() failed");
		});
}

/**
 *	Get the forecast metadata
 */
async function getWeatherForecastUrl(lat, lng) {
	// return the result after fetch completes
	return fetch(`https://api.weather.gov/points/${lat},${lng}`)
		.then(Functions.handleErrors)
		.then(res => res.json())
		.then(json => {
			// console.log(json);
			return json.properties.forecast || null;
		})
		.catch(error => {
			throw new Error("getWeatherForecastUrl() failed");
		});
}
