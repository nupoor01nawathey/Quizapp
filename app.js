const express       = require('express'),
      ejs           = require('ejs'),
      mongoose      = require('mongoose'),
      cookieSession = require('cookie-session'),
      passport      = require('passport'),
      app           = express();


const authRoutes    = require('./routes/auth-routes'),
      profileRoutes = require('./routes/user-profile');
      listRoutes    = require('./routes/list-routes');

const passportSetup = require('./config/passport-init'),
      keys          = require('./config/secret-keys');

app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

// setup cookie session params, in milli sec, encrypt cookie
app.use(cookieSession({ 
    maxAge: 24 * 60 * 60 * 1000, 
    keys: [ keys.session.cookieKey ]
}))

// initialize passport and session
app.use(passport.initialize()); 
app.use(passport.session());

app.get('/', (req, res) => {
    res.render('home', {user: req.user});
});

mongoose.connect(keys.mongodb.dbURI,  { useNewUrlParser: true }, () => {
    console.log('Connected to MLab db successfuly');
});

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/list', listRoutes);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
    console.log('Server started at ', PORT);
});