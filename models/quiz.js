const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

// const qandaData = new Schema({
//     answerOptions: multipleAnswers
// });

const quizSchema = new Schema({
    parentCategory: String,
    framwork: String,
    versionNumber: String,
    isVersion: Boolean,
    question: String,
    actualAnswer: String,
    // quizdata: [qandaData]
    quizdata: Schema.Types.Mixed,
});


const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
      