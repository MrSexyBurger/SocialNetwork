const UserModel = require('../models/user');
const PostModel = require('../models/post');

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

    UserModel.updateOne({_id: userId}, {$set: {status : status}}, (err, user) => {
        res.send(JSON.stringify({resultCode: 0}))
    })
}

exports.getPosts = (req, res) => {

    PostModel.find({userId: req.params.userId}, (err, posts) => {
        if (err) return res.sendStatus(400);
        res.send(JSON.stringify({
            posts: posts,
            resultCode: 0
        }));
    })
}

exports.postPost = (req, res) => {

    const userId = req.cookies.auth;
    const text = req.body.post;

    let date = new Date();
    date = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    const post = new PostModel({
        userId: userId,
        text: text,
        date: date
    })

    post.save( (err, post) => {
        if(err) {
            res.send(JSON.stringify({
                message: 'Ошибка отправки поста!',
                resultCode: 1
            }))
        }

        res.send(JSON.stringify({
            post,
            message: 'Пост успешно добавлен!',
            resultCode: 0
        }))

    })
}

exports.deletePost = (req, res) => {
    const postId = req.params.postId
    console.log(postId)
    PostModel.deleteOne({_id: postId}, (err, result) => {
        res.send(JSON.stringify({
            message: 'Пост удалён!',
            resultCode: 0
        }))
    })

}

exports.editPost = (req, res) => {
    const postId = req.body.postId;
    const post = req.body.post;

    PostModel.updateOne({_id: postId}, {$set: {text : post}}, (err, user) => {
        res.send(JSON.stringify({
            message: 'Текст успешно изменен!',
            resultCode: 0
        }))
    })
}



exports.postTest = (req, res) => {

    const userId = '5f198e8c1293e823d003f160';
    const text = 'test post';

    const post = new PostModel({
        userId: userId,
        text: text
    })

    post.save( (err, data) => {
        if(err) {
            res.send(JSON.stringify({
                message: 'Ошибка отправки поста!',
                resultCode: 1
            }))
        }

        res.send(JSON.stringify({
            message: 'Пост успешно добавлен!',
            resultCode: 0
        }))

    })
}

exports.delAll = (req, res) => {
    PostModel.deleteOne({}, (err, data) => {
        res.send(JSON.stringify({
            message: 'Посты удалёны!',
            resultCode: 0
        }))
    })
}