# Pickipedia

Pickipedia is a Wikipedia'-style application intended to archive the the people, places and events that make up the American roots/bluegrass music scene in and around New York City. 

Hosted on Heroku at: https://sean-p--ryan-blocipedia.herokuapp.com/

## Getting Started

### Prerequisites
Be sure to have Node.js and Git installed on your machine. 

### Installing
After cloning into a local copy of the repo, run `npm install` to install dependencies. Run `npm install -g nodemon` to install Nodemon globally, then run the `nodemon` command to launch the application on localhost:3000 and automatically refresh the browser when server-side changes are saved. 

## Server
Node and Express perform route handling, static file rendering, and assist with database modeling and querying. 

## Database

## Middleware
### Authentication
[I'm an inline-style link](https://www.google.com)
Passport handles user authentication, using the default 'local' strategy to store the user object in sessions.

### Testing
A Jasmine test suite for all server endpoints is in the `src/spec` folder. `npm test` will run tests. 
