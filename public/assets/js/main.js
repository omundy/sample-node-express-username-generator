// console.log("hello from main.js");

// get the base url for the app (is it running on localhost or a server?)
let baseUrl = window.location.href;

// on form submit
$("#generateUsername").submit(async (e) => {
	// prevent default behavior (the loading of a new page)
	e.preventDefault();

	// endpoint url
	let url = baseUrl + "api/generateUsername",
		// body to send to API
		body = {
			cityIndex: null
		},
		// weather icon to show if user chooses weather
		weatherIcon = "";

	// if select was chosen
	if (!isNaN($("#cityIndex").val())) {
		// console.log($("#cityIndex").val());
		// update the value
		body.cityIndex = Number($("#cityIndex").val());
	}

	// create the request object
	let request = {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	};
	// console.log(request);


	// fetch data, convert response to json
	fetch(url, request)
		.then(response => response.json())
		.then(json => {
			console.log("json =", json);

			if (json.weather != null) {
				if (json.weather.includes("cloud")) {
					weatherIcon = "🌥";
				} else if (json.weather.includes("sun")) {
					weatherIcon = "☀️";
				} else if (json.weather.includes("rain")) {
					weatherIcon = "🌧";
				}
			} else {
				weatherIcon = "";
			}

			// update weatherIcon
			$("#weatherIcon").html(weatherIcon);
			// populate username
			$("#username").val(json.username);
		});


});
