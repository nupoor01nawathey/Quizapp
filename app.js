const express = require('express'),
      ejs     = require('ejs'),
      //path    = require('path'),
      app     = express();


const authRoutes = require('./routes/auth-routes');

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('home');
});

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000 ;
app.listen(PORT, () => {
    console.log('Server started at ', PORT);
});