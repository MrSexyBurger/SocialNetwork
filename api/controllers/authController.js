const UserModel = require('../models/user');

exports.me = function (req, res) {

    let userId = req.cookies.auth;
    let message;
    let resultCode;

    UserModel.findOne({_id: userId}, (err, user) => {

        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }

        if (user) {
            message = 'Добро пожаловать в Social Network!';
            resultCode = 0;

            res.send(JSON.stringify({
                data: {
                    id: user._id,
                    login: user.username,
                    email: user.email,
                    avatar: user.avatar.small
                },
                message: message,
                resultCode: resultCode
            }))

        } else {
            message = 'Не удалось войти в Sosial Network!';
            resultCode = 1;

            res.send(JSON.stringify({
                message: message,
                resultCode: resultCode
            }))
        }


    })

}

exports.login = function (req, res) {

    let message;
    let resultCode;

    UserModel.findOne({password: req.body.password, email: req.body.email}, (err, user) => {

        if (err) {
            console.log(err);
            return res.sendStatus(400);
        }

        if (user) {
            message = 'Вы залогинились в Social Network!';
            resultCode = 0;
            res.cookie('auth', user._id, { maxAge: 3600000 * 24 });
        } else {
            message = 'Не верные логин или пароль!';
            resultCode = 1;
        }

        res.send(JSON.stringify({
            message: message,
            resultCode: resultCode
        }))

    })

}

exports.logout = function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Allow-Credentials', 'true');
    res.clearCookie('auth');

    let message = 'Пользователь вышел из системы';
    let resultCode = 0;

    res.send(JSON.stringify({
        message: message,
        resultCode: resultCode
    }))
}

exports.registration = function (req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const gender = req.body.gender;
    const birth = req.body.birth;

    const user = new UserModel({
        username, gender, birth, email, password
    })

    user.save( (err, data) => {
        if(err) {
            res.send(JSON.stringify({
                message: 'Не удалось зарегестироваться!',
                resultCode: 1
            }))
        }
        console.log(data)
        res.cookie('auth', data._id, { maxAge: 3600000 * 24 });
        res.send(JSON.stringify({
            message: 'Регистрация прошла успешно!',
            resultCode: 0
        }))

    })

}