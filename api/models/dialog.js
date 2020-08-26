const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dialogSchema = new Schema({
    author: String,
    recipient: String,
    messages: [{
        author: String,
        text: String,
        date: String
    }]
});

module.exports = mongoose.model('dialog', dialogSchema);