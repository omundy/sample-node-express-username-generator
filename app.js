/**
 *	App file - ties all the modules together
 */

// dependencies
const express = require('express');
const path = require('path');
const app = express();

// parse incoming request bodies, populate req.body
var bodyParser = require('body-parser');
// extract JSON body of the incoming request
app.use(bodyParser.json());
// extract URL-encoded body of the incoming request
app.use(bodyParser.urlencoded({
	extended: true // support hierarchical data
}));

// load middleware to log requests
const Middleware = require("./app/middleware.js");
app.use(Middleware.showRequests);

// or use the morgan middleware to log requests
// https://expressjs.com/en/resources/middleware/morgan.html
// var morgan = require('morgan');
// app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));

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

// export app for server
module.exports = app;
