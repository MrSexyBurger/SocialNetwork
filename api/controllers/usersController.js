const UserModel = require('../models/user');

exports.users = (req, res) => {
    const authId = req.cookies.auth;
    const section = req.query.section;
    let query;
    let usersCount;

    switch (section) {
        case 'find': {
            query = {_id: {$ne: authId}, friends: {$ne: [authId]}};
            break
        }
        case 'friends': {
            query = {_id: {$ne: authId}, friends: {$in: [authId]}}
            break
        }
    }


    UserModel.find(query).countDocuments((err, count) => usersCount = count);

    UserModel.find(query, (err, users) => {
        if (err) return res.sendStatus(400);

        users = users.map(data => (
            {
                id: data._id,
                username: data.username,
                birthDate: data.birth,
                avatar: data.avatar.small,
                friends: data.friends,
                usersCount: usersCount
            }
        ));

        res.send(JSON.stringify({
            users: users,
            result: 0
        }))
    })
}

exports.deleteAll = (req, res) => {
    UserModel.deleteMany({}, (err, res) => {
        console.log('Все пользователи удалены!!');
    })
}

exports.all = (req, res) => {
    UserModel.find().then(result => res.send(result))
}