const UserModel = require('../models/user');

exports.follow = (req, res) => {
    const id = '12';
    const userId = '123444';
    const message = `Пользователь с id {id} успешно добавлен`;
    const resultCode = 0;

    UserModel.update({_id: userId}, {$push: {follow: {id}}}, (err, users) => {
        res.send(JSON.stringify({
            message, resultCode
        }))
    })
}

exports.unfollow = (req, res) => {
    const id = '12';
    const userId = '123444';
    const message = `Пользователь с id {id} успешно добавлен`;
    const resultCode = 0;

    UserModel.update({_id: userId}, {$pull: {follow: {id: id}}}, (err, users) => {
        res.send(JSON.stringify({
            message, resultCode
        }))
    })
}