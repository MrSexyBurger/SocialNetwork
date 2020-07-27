const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postScheme = new Schema({
    userId: String,
    text: String,
    date: String
})

module.exports = mongoose.model('Post', postScheme);