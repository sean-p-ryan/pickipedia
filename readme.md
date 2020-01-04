# Pickipedia

Pickipedia is a Wikipedia'-style application intended to archive the the people, places and events that make up the American roots/bluegrass music scene in and around New York City. 

Hosted on Heroku at: https://sean-p--ryan-blocipedia.herokuapp.com/

### Prerequisites
Be sure to have Node.js and Git installed on your machine. 

### Installing
After cloning into a local copy of the repo, run `npm install` to install dependencies. Run `npm install -g nodemon` to install Nodemon globally, then run the `nodemon` command to launch the application on localhost:3000 and automatically refresh the browser when server-side changes are saved. 

Run `pg_ctl -D /usr/local/var/postgres start` to start the database connection.

## Server
Node and Express perform route handling, static file rendering, and assist with database modeling and querying. 

## Database
User data is stored in a Postgres relational database in both production and development environments. Database access credentials are stored as environment variables. Database modeling and querying is handled with the [Sequelize ORM](https://sequelize.org/)

## User Authentication
[Passport](http://www.passportjs.org/docs/) handles user authentication, using the default 'local' strategy to store the user object in sessions.

## User roles/upgrading
Once signed up, a user can upgrade to a "premium" account to create private wikis, which are only visible to other premium members. The creator of a private wiki can also add other users (including basic users) as collaborators on the wiki. Collaborators can edit wikis, but not delete them. Premium users can downgrade to basic, at which point any private wikis they've created will be converted to public wikis. 

The application uses Stripe to create a mock payment processing flow allowing the user to upgrade. Use the credit card number `4242424242424242`, and any email address, expiration date and CVC code to upgrade. 

## Testing
A Jasmine test suite for all server endpoints is in the `src/spec` folder. `npm test` will run tests. 
