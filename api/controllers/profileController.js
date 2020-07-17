const UserModel = require('../models/user');

exports.profile = (req, res) => {
    UserModel.findOne({_id: req.params.userId}, (err, profile) => {
        if (err) return res.sendStatus(400);
        res.send(JSON.stringify({
            userId: profile._id,
            username: profile.username,
            avatar: profile.avatar,
            gender: profile.gender,
            birth: profile.birth,
            location: profile.location
        }));
    })
}

exports.getStatus = (req, res) => {
    UserModel.findOne({_id: req.params.userId}, (err, profile) => {
        if (err) return res.sendStatus(400);
        res.send(JSON.stringify(profile.status));
    })
}

exports.editStatus = (req, res) => {
    const userId = req.cookies.auth;
    const status = req.body.status;

    UserModel.update({_id: userId}, {$set: {status : status}}, (err, user) => {
        res.send(JSON.stringify({resultCode: 0}))
    })

}