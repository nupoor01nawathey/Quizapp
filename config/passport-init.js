const passport       = require('passport'),
      GoogleStrategy = require('passport-google-oauth20');
  
const keys = require('./secret-keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id); //err = null
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then((user) => {
        done(null, user);
    })
    .catch(err => {
        console.log('error in deserializing user', err);
    });
});


// create id and secret from goole developer console   
passport.use(
    new GoogleStrategy({
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport cb function
        // console.log(profile);
        User.findOne({googleId: profile.id})
        .then(currentUser => {
            if(currentUser) {
                console.log('user already exist');
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id,
                    thumbnail: profile._json.image.url
                })
                .save()
                .then(newUser => {
                    console.log('new user created', newUser);
                    done(null, currentUser);
                })
                .catch(err => {
                    console.log('error ocurred while saving user', err);
                });
            }
        })
        .catch(err => {
            console.log('error ocurred while saving user', err);
        });
    })
);
