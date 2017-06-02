const AuthenticationController = require('./controllers/authentication'),
      express = require('express'),
      passportService = require('./config/passport'),   // Not an import but execution, contains actual login Strategy (jwt and local)
      passport = require('passport');

  // Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

var users = require('./routes/users');


// Constants for role types
const REQUIRE_ADMIN = "Admin",
      REQUIRE_OWNER = "Owner",
      REQUIRE_CLIENT = "Client",
      REQUIRE_MEMBER = "Member";

module.exports = function(app) {
  app.use('/api', users);

};
