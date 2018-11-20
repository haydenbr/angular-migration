var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    session = require('express-session'),
		path = require('path');
		cors = require('cors');

module.exports = function(app) {
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
  app.use(session({
    secret: 'multi vision unicorns',
    resave:false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
}
