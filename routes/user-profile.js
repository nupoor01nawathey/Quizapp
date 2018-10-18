const router   = require('express').Router(),
      passport = require('passport');

const authCheck = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();  
    }
    return res.redirect('/auth/login');
}

router.get('/', authCheck, (req, res) => {
    res.render('auth/profile', {user: req.user});
});

module.exports = router;