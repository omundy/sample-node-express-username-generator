/**
 *	Require and start running app as server - HTTPS version
 */

// require main app
const app = require('./app');

// set port
const port = process.env.PORT || 3000;

// HTTPS dependencies
const https = require('https');
const fs = require('fs');
var key = fs.readFileSync('/private/etc/apache2/server.key');
var cert = fs.readFileSync('/private/etc/apache2/server.crt');
var options = {
	key: key,
	cert: cert
};

// use HTTPS to create server
var server = https.createServer(options, app);
// start listening for requests
server.listen(port, () => {
	console.log(`Example HTTPS app listening at https://localhost:${port}`);
});

// export app
module.exports = app;
