var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const AuthenticationController = require('./../controllers/authentication'),
      passport = require('passport'),
      passportService = require('./../config/passport')

  // Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });



// Registration route
router.post('/register', AuthenticationController.register);

// Login route
router.post('/login', requireLogin, AuthenticationController.postLogin);

router.get('/user', requireAuth, function(req, res) {
res.send('It worked! User is: ' + req.user + '.');
});

module.exports = router;
