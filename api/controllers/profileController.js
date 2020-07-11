const UserModel = require('../models/user');

exports.profile = (req, res) => {
    console.log(req.params.userId)
    UserModel.findOne({_id: req.params.userId}, (err, profile) => {
        if (err) return res.sendStatus(400);
        res.send(JSON.stringify({
            username: profile.username,
            avatar: profile.avatar,
            status: profile.status,
            gender: profile.gender,
            birth: profile.birth,
            location: profile.location
        }));
    })
}