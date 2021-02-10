/**
 *	Middleware module - helper functions for your application
 */


var exports = module.exports = {};



// function to show all requests
exports.showRequests = (req, res, next) => {
	// ignore static files
	if (!req.originalUrl.includes("/assets/") && !req.originalUrl.includes("/favicon")) {
		// log the path
		console.log(`\nRequest ${req.method} ${req.originalUrl} [STARTED] from ${req.ip}`, new Date().toLocaleString());

		res.on('close', () => {
			console.log(`Request ${req.method} ${req.originalUrl} [CLOSED] from ${req.ip}`, new Date().toLocaleString());
		});
	}
	// invoke next middleware function
	next();
};
