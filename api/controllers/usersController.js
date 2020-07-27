const UserModel = require('../models/user');

exports.users = (req, res) => {
    UserModel.find({}, (err, users) => {
        if (err) return res.sendStatus(400);
        res.send(JSON.stringify(users));
    })
}

exports.deleteAll = (req, res) => {
    UserModel.deleteMany({}, (err, res) => {
        console.log('Все пользователи удалены!!');
    })
}