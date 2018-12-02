var logger = require('morgan'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    session = require('express-session');

module.exports = function(app) {
	app.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
		res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		res.header('Access-Control-Allow-Credentials', 'true');
		next();
	})
	app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(session({
    secret: 'multi vision unicorns',
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}
