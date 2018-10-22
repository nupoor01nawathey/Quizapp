const router    = require('express').Router(),
      User      = require('../models/user'),
      authCheck = require('../config/authCheck');

router.get('/:quizName', authCheck, (req, res) => {
    const enrollQuizName = req.params.quizName;

    // check first if user has already enrolled for the quiz 
    // if yes,dont save quiz again simply redirect to quiz page else save and redirect 
    User.find({googleId: req.user.googleId})
    .select('enrollQuiz -_id')
    .then(foundUser => {
        if(foundUser[0].enrollQuiz.indexOf(enrollQuizName) !== 1 ) {
            console.log('quiz already exists');
            res.redirect('quiz/' + enrollQuizName)
        } else {
            // add quiz here
            User.updateOne({googleId: req.user.googleId}, 
                { "$push": {'enrollQuiz' : enrollQuizName }},
                { "new": true, "upsert": true },
            )
            .then(result => {
                console.log('User found, going to enroll user' + result);
                res.redirect('quiz/' + enrollQuizName); //
            })
            .catch(err => {
                console.log('err enrolling user for the quiz ' + err);
            });        
        }
    })
    .catch(err => {
        console.log('err finding user data ' + err);
    });
   
});

module.exports = router;