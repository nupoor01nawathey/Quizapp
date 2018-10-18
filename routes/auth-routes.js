const router = require('express').Router();

// auth login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

// auth logout
router.get('/logout', (req, res) => {
    res.render('auth/logout');
});

// auth with google
router.get('/google', (req, res) => {
    res.send('login with google');
});

module.exports = router;