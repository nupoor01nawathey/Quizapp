const express = require('express'),
      ejs     = require('ejs'),
      mongoose = require('mongoose'),
      //path    = require('path'),
      app     = express();


const authRoutes    = require('./routes/auth-routes');
const passportSetup = require('./config/passport-init');
const keys          = require('./config/secret-keys');

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('home');
});

mongoose.connect(keys.mongodb.dbURI,  { useNewUrlParser: true }, () => {
    console.log('Connected to MLab db successfuly');
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
    console.log('Server started at ', PORT);
});