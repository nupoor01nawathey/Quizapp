const passport       = require('passport'),
      GoogleStrategy = require('passport-google-oauth20');
  
const keys = require('./secret-keys');
// create id and secret from goole developer console   
passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, () => {
        
    })
);