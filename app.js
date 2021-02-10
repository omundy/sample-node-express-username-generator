/**
 *	App file - ties all the modules together
 */

// dependencies
const express = require('express');
const path = require('path');
const app = express();

// load middleware to display requests
const Middleware = require("./app/middleware.js");
app.use(Middleware.showRequests);

// public directory
app.use(express.static(__dirname + '/public'));

// set the view engine
const expressHandlebars = require('express-handlebars');
app.engine('.hbs', expressHandlebars({
	defaultLayout: 'main',
	extname: '.hbs'
}));
// set views directory
app.set("views", path.join(__dirname, "/views"));
// set views engine
app.set('view engine', '.hbs');

// require routes file and pass context
require('./app/routes')(app);

// export app for server, server-http, heroku, etc.
module.exports = app;
