const mongoose = require('mongoose'),
      keys     = require('./secret-keys');
      Quiz     = require('../models/quiz');

mongoose.connect(keys.mongodb.dbURI,  { useNewUrlParser: true }, () => {
    console.log('Connected to MLab db successfuly');
});

var loadDataInDB = [
    new Quiz({
        parentCategory: 'Modern Web Dev',
        framwork: 'Nodejs',
        versionNumber: 'v10.3.0',
        isVersion: true,
        quizdata: {
            question: "Which of the following is true about Node.JS?",
            actualAnswer: "All of the above.",
            answerOptions : [
                "Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.",
                "Node.JS is used to delevop I/O intensive web applications like video streaming sites, single page applications and other web application.",
                "Node.js is open source and is completely free to use.",
                "All of the above."           
            ]
        }  
    }),
    new Quiz({
        parentCategory: 'Modern Web Dev',
        framwork: 'Nodejs',
        versionNumber: 'v10.3.0',
        isVersion: true,
        quizdata: {
            question: "What is Callback?",
            actualAnswer: "Callback is an asynchronous equivalent for a function.",
            answerOptions : [
                "Callback is an asynchronous equivalent for a function.",
                "Callback is a technique in which a method call back the caller method.",
                "Both of the above.",
                "None of the above.",
            ]
        }
    }),
    new Quiz({
        parentCategory: 'Modern Web Dev',
        framwork: 'Nodejs',
        versionNumber: 'v10.3.0',
        isVersion: true,
        quizdata: {
            question: "Which of the following is true about Piping streams?",
            actualAnswer: "All of the above.",            
            answerOptions : [
                "Piping is a mechanism where we provide output of one stream as the input to another stream.",
                "Piping is normally used to get data from one stream and to pass output of that stream to another stream.",
                "There is no limit on piping operations.",
                "All of the above."
            ]
        }
    }),
    new Quiz({
        parentCategory: 'Modern Web Dev',
        framwork: 'Nodejs',
        versionNumber: 'v10.3.0',
        isVersion: true,
        quizdata: {
            question: "Which of the following code converts a buffer buf to JSON object?",
            actualAnswer: "buf.toJSON()",   
            answerOptions : [ 
                "buf.toJSON()",
                "buf.json()",
                "buf.covertToJson()",
                "buf.jsonify()"
            ]
        }
    }),
    new Quiz({
        parentCategory: 'Modern Web Dev',
        framwork: 'Nodejs',
        versionNumber: 'v10.3.0',
        isVersion: true,
        question: "Which of the following is true about __dirname global object?",
        actualAnswer: "The __dirname represents the name of the directory that the currently executing script resides in.",
        quizdata: {
            question: "Which of the following is true about __dirname global object?",
            actualAnswer: "The __dirname represents the name of the directory that the currently executing script", 
            answerOptions: [
                "The __dirname represents the name of the directory that the currently executing script resides in.",
                "The __dirname represents the resolved absolute path of code file.",
                "Both of the above.",
                "None of the above."
            ]
        }
    })
];

var counter = 0 ;
for(var i=0; i < loadDataInDB.length; i++) {
    loadDataInDB[i].save()
    .then(done => {
        counter++;
        console.log('saved record in db successfully');
        if(counter === loadDataInDB.length) {
            exit();
        }
    })
    .catch(err => {
        console.log('error in saving record ' + err );
    });
}

function exit() {
    mongoose.disconnect();
    console.log('disconnecting from db');
}

module.exports = loadDataInDB ;