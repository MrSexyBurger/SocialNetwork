const UserModel = require('../models/user');

exports.follow = (req, res) => {
    let userId = req.body.userId;
    let authId = req.cookies.auth;

    UserModel.updateOne({_id: authId}, {$push: {friends: userId}}, (err, users) => {
        UserModel.updateOne({_id: userId}, {$push: {friends: authId}}, (err, users) => {
            res.send(JSON.stringify({
                message: `Пользователь с id ${userId} успешно добавлен!`,
                resultCode: 0
            }))
        })
    })
}

exports.unfollow = (req, res) => {
    let userId = req.params.userId;
    let authId = req.cookies.auth;

    UserModel.updateOne({_id: authId}, {$pull: {friends: userId}}, (err, users) => {
        UserModel.updateOne({_id: userId}, {$pull: {friends: authId}}, (err, users) => {
            res.send(JSON.stringify({
                message: `Пользователь с id ${userId} успешно удален!`,
                resultCode: 0
            }))
        })
    })

}
