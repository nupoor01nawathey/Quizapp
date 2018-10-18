const router   = require('express').Router(),
      passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('auth/login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    res.render('auth/logout');
});

// auth with google
router.get('/google', passport.authenticate('google', 
    { scope: ['profile'] }
));

// google callback route for redirect
router.get('/google/redirect', (req, res) => {
    res.send('you reached callback url');
});

module.exports = router;