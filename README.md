# Sample Node Express Template

Fork this template repository to get started with Node / Express.


Or follow the steps below to create your own:


### Create the repository

1. In Github Desktop: Choose File > New Repository
1. Name: The name of your project, e.g. `sample-node-express-template`
1. Local Path: The directory on your computer where you keep your projects
1. Create Readme: Yes
1. Choose Repository > Open in Terminal

### Initialize NPM

In Terminal...
```
# initialize NPM - just hit return for each of these for now
npm init
# install nodemon for development
npm install -g nodemon
# install project dependencies
npm install --save express express-handlebars node-fetch
# open in Atom
atom .
```

### Notes on the file structure

In Atom, add the following files from the source from this repository...

- [`app/middleware.js`](app/middleware.js) - Helper functions for your application stack
- [`app/routes.js`](app/routes.js) - Organize all your routes in a single file
- [`public`](public) - Directory with public sample assets
- [`views`](views) - Directory with handlebar layout files
- [`.gitignore`](.jshintrc) - Tell git to ignore files
- [`.jshintrc`](.jshintrc) - Configuration file for [JSHint](https://atom.io/packages/atom-jshint)
- [`app.js`](app.js) - Main app file, ties together all the middleware and modules
- [`package.json`](package.json) - Update your own `start` scripts from this
- [`Procfile`](Procfile) - Tells Heroku how to start
- [`server.js`](server.js) - Loads the app and starts the file



### Start the application

1. Start the app: `npm start`
1. Check that your app is running <https://localhost:3000/>




The following start options are also available

- Start in development mode (with nodemon --inspect) `npm run start-dev`
- If you are using HTTPS locally (with nodemon --inspect) `npm run start-https`



## Notes

- Heroku status available at https://status.heroku.com/
