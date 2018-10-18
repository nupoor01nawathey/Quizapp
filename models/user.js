const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;


const userSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;