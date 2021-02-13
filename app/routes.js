/**
 *	Routes module - all the website and api endpoints
 */


const generator = require('./generator');
const locations = require('./data/locations');


module.exports = function(app) {


	/////////// WEBSITE ROUTES ///////////

	// website home page
	app.get('/', (req, res) => {
		// render page
		res.render('home', {
			title: 'hello from the route',
			cities: locations.cities
		});
	});
	// cats
	app.get('/cats', (req, res) => {
		// random # between 1-5
		let r = Math.floor(Math.random() * 5);
		// render page
		res.render('cats', {
			title: 'home page',
			img: 'cat' + r + '.jpg'
		});
	});

	/////////// API ROUTES ///////////

	// api endpoint
	app.get('/api', (req, res) => {
		res.status(200).json({
			message: "hello"
		});
	});

	// generator endpoint - testable in a browser
	app.get('/api/generateUsername', async (req, res) => {
		res.status(200).json({
			username: await generator.generateUsername()
		});
	});


	// api endpoint - test this with postman or with a web form
	app.post('/api/generateUsername', async (req, res, next) => {
		console.log("req.body =", req.body);

		// pass cityIndex to generateUsername function
		// store result in response object
		let response = await generator.generateUsername(req.body.cityIndex);
		console.log("response =", response);

		res.status(200).json(response);
	});


};
