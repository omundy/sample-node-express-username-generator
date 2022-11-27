/**
 *	Middleware module - helper functions for your application
 */

var strftime = require('strftime');
var exports = module.exports = {};

const ignorePatterns = [
	"/assets/",
	"/favicon",
	".svg",
	"/site.webmanifest",
];

/**
 *	Middleware function to show all requests
 *	See https://en.wikipedia.org/wiki/Common_Log_Format
 */
exports.showRequests = (req, res, next) => {

	// request patterns to ignore (do not log)
	let log = true;
	for (let i = 0; i < ignorePatterns.length; i++) {
		if (req.originalUrl.includes(ignorePatterns[i])) log = false;
	}

	if (log) {
		const now = strftime('%d/%b/%Y:%H:%M:%S %z');

		// start
		console.log(`✅ "${req.method} ${req.url} ${req.protocol}" [start] ${req.ip} - - ${now}`);

		// res.on('finish', () => {
		// 	console.log(`❌ "${req.method} ${req.url} ${req.protocol}" [finish] ${req.ip} - - ${now} `);
		// });

		res.on('close', () => {
			console.log(`❌ "${req.method} ${req.url} ${req.protocol}" [close] ${req.ip} - - ${now} \n`);
		});
	}

	// invoke next middleware function
	next();
};
