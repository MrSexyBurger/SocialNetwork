const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postScheme = new Schema({
    receiver: String,
    sender: String,
    username: String,
    avatar: String,
    text: String,
    date: String
})

module.exports = mongoose.model('Post', postScheme);