const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const avatarBig = 'http://localhost:9000/images/avatars/avatarBig.png';
const avatarSmall = 'http://localhost:9000/images/avatars/avatarSmall.png';

const userScheme = new Schema({
    username: String,
    location: {
        country: {type: String, default: ''},
        city: {type: String, default: ''},
    },
    job: {
        organisation: {type: String, default: ''},
        profession: {type: String, default: ''},
    },
    education: {
        school: {type: String, default: ''},
        university: {type: String, default: ''},
        faculty: {type: String, default: ''},
    },
    gender: String,
    birth: String,
    status: {type: String, default: 'тестовый комментарий!'},
    avatar: {
        small: {type: String, default: avatarSmall},
        big: {type: String, default: avatarBig}
    },
    email: String,
    password: String,
    friends: [String]
})

module.exports = mongoose.model('User', userScheme);