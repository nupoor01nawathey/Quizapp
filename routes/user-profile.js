const router   = require('express').Router(),
      passport = require('passport');

const quizCategoryInfo = require('../config/quizCategorySeeder.js'); 
const authCheck = require('../config/authCheck');


router.get('/', authCheck, (req, res) => {
    res.render('auth/profile', {user: req.user, quizCategory: quizCategoryInfo});
});

module.exports = router;