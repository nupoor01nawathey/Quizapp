const router   = require('express').Router(),
      passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('auth/login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// auth with google
router.get('/google', passport.authenticate('google', 
    { scope: ['profile'] }
));

// google callback route for redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    //console.log(req.user);
    res.redirect('/profile');
});

module.exports = router;