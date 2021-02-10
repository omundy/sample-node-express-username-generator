/**
 *	Routes module - all the website and api endpoints
 */


module.exports = function(app) {


	/////////// WEBSITE ROUTES ///////////

	// website home page
	app.get('/', (req, res) => {
		// random # between 1-5
		let r = Math.floor(Math.random() * 5);
		// render page
		res.render('home', {
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



};
