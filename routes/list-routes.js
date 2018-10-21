const router = require('express').Router();
//const Quiz   = require('../models/quiz');

const authCheck = require('../config/authCheck');

devopsList = [
    'Jenkins',
    'Travis',
    'GIT',
    'Github',
    'CI'
]


router.get('/devops', authCheck, (req, res) => {
    res.render('list/devops', {user: req.user, list: devopsList}); //
});

router.get('/webdev', (req, res) => {
    res.render('list/webdev'); //
});

router.get('/dbs', (req, res) => {
    res.render('list/dbs'); //
});

router.get('/cloud', (req, res) => {
    res.render('list/cloud'); //
});

module.exports = router;