# Pickipedia

Pickipedia is a Wikipedia'-style application intended to archive the the people, places and events that make up the American roots/bluegrass music scene in and around New York City. 

Hosted on Heroku at: https://sean-p--ryan-blocipedia.herokuapp.com/

## Getting Started

### Prerequisites
Be sure to have Node.js and Git installed on your machine. 

### Installing
After cloning into a local copy of the repo, run `npm install` to install dependencies, then `npm start` to start a local server on localhost:3000. Navigate to localhost:3000 in any browser to view the application in a local setup. 

### Server
I selected Express.js to power the back end of the application since it is well suited to handle each of its functional needs, including:  

- Serving static files 
- Handling client-side HTTP requests 
- Directing reqests to an external API and converting responses to JSON
- Sending JSON data from the API to the client
- Setting up a local server for development and testing
- Server port management for local and production environments

### Testing
A Jasmine test suite for all server endpoints is in `./spec/static_spec.js`. `npm test` will run tests. 
