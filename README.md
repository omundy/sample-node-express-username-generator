# Sample Node Express Template

Fork this template repository to get started with Node / Express.


Or follow the steps below to create your own:


## Create a new project repository

1. In Github Desktop: Choose File > New Repository
1. Name: The name of your project, e.g. `sample-node-express-template`
1. Local Path: The directory on your computer where you keep your projects
1. Create Readme: Yes
1. Go ahead and publish the project using Github Desktop (button at the top)
1. Choose Repository > Open in Terminal (or whichever shell you are using)


## Initialize NPM

In your shell...
```bash
# initialize NPM - just hit return for each of these for now
npm init
# install nodemon for development
npm install -g nodemon
# install project dependencies
npm install --save express express-handlebars node-fetch
# open in Atom
atom .
```

## Notes on the file structure

In Atom, add the following files from the source from this repository...

- [`app/middleware.js`](app/middleware.js) - Helper functions for your application stack
- [`app/routes.js`](app/routes.js) - Organize all your routes in a single file
- [`public`](public) - Directory set as public, contains all static sample assets
- [`views`](views) - Directory with handlebars `.hbs` layout files
- [`views/layouts/main.hbs`](views/layouts/main.hbs) - Main handlebars layout file
- [`views/home.hbs`](views/home.hbs) - Home page view that is rendered with handlebars layout file
- [`.gitignore`](.jshintrc) - Tell git to ignore files
- [`.jshintrc`](.jshintrc) - Configuration file for [JSHint](https://atom.io/packages/atom-jshint)
- [`app.js`](app.js) - Main app file, ties together all the middleware and modules
- [`package.json`](package.json) - Update your own `start` scripts from this
- [`Procfile`](Procfile) - Tells Heroku how to start (see below)
- [`server-https.js`](server-https.js) - Loads the app and starts the server (this version uses SSL on localhost)
- [`server.js`](server.js) - Loads the app and starts the server



## Start the application

To start your app...

1. Run: `npm start`
1. Check that your app is running <http://localhost:3000/>

To use Nodemon to watch and restart your app when you update files:

- Start in development mode with nodemon: `npm run start-dev`
- Start in development mode with nodemon (requires a key and certificate): `npm run start-https`


## Add a 🍕 Favicon

To add an emoji favicon...

1. Visit this page https://favicon.io/emoji-favicons/
1. Select your emoji
1. Download and unzip the files and place them in the `public/` directory
1. Add the correct meta tags to the `<head>` of the main handlebars layout file [`views/layouts/main.hbs`](views/layouts/main.hbs)






## Heroku Instructions

### Heroku Setup

These steps explain how to publish your node app to the web with Heroku. Before you begin you'll need to...

1. Create a [Heroku](https://heroku.com/) account
2. Download and install heroku-cli using these [multi-platform instructions](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
3. Verify the heroku-cli is installed: `heroku --version`
4. Login to Heroku: `heroku login` (prompts browser login) or `heroku login -i` (prompts CLI login)



### Project Setup

For every project you publish...

1. Add a [`Procfile`](Procfile) to the root directory
2. Create a heroku app and (optionally) name it (don't include the `<` or `>`)

```bash
heroku create <unique-app-name>
```
3. Check that git now has another remote repository (in addition to Github)

```bash
git remote -v
# you should see something like
# heroku	https://git.heroku.com/sample-node-express-template.git (fetch)
# heroku	https://git.heroku.com/sample-node-express-template.git (push)
# origin	https://github.com/omundy/sample-node-express-template.git (fetch)
# origin	https://github.com/omundy/sample-node-express-template.git (push)
```


### Publish Your Project

4. You'll perform these steps [each time you want to push and update Heroku](https://devcenter.heroku.com/articles/git). This will reinstall your dependencies and restart your app on the server. Note: You can continue testing locally but when you want to test on your server you have to commit and push again.

```bash
# commit your code and push it to Heroku
git add .
git commit -m "Heroku Hello World"
git push heroku main
```

5. Assign a single web dyno (basically a server) to run the app. This command starts your app after you have deployed above. Run this just once because every time you `git push` (step 4) Heroku will restart your app.
```bash
heroku ps:scale web=1
```

6. Open your site at https://name-of-your-app.herokuapp.com/
```bash
heroku open
```

7. If something isn't working correctly you can view the server logs (also see [heroku cli commands](https://devcenter.heroku.com/articles/heroku-cli-commands))
```bash
heroku logs --tail
```




## Notes

- Heroku status is available at https://status.heroku.com/
- Heroku command line arguments https://devcenter.heroku.com/articles/heroku-cli-commands
- [How to deploy your Node.js / MongoDB app to the web, using Heroku](https://medium.com/make-school/how-to-deploy-your-node-js-mongodb-app-to-the-web-using-heroku-63d4bccf2675)
