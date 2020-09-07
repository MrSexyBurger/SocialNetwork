const UserModel = require('../models/user');
const PostModel = require('../models/post');

exports.profile = (req, res) => {

        UserModel.findOne({_id: req.params.userId}, (err, profile) => {
            if (err) return res.sendStatus(400);
            let profileData = {
                info: {
                    userId: profile._id,
                    username: profile.username,
                    avatar: profile.avatar,
                    gender: profile.gender,
                    birth: profile.birth,
                    location: profile.location,
                    friendsCount: profile.friends.length,
                    job: profile.job,
                    education: profile.education
                },
                status: profile.status
            }

            let test = profile.friends;

            UserModel.find({_id: test})
                .limit(6)
                .then(result => {
                    const friendsShort = result.map(friend => {
                        return {
                            userId: friend._id,
                            username: friend.username,
                            avatar: friend.avatar.small
                        }
                    });

                    profileData.friendsShort = friendsShort;

                    PostModel.find({receiver: req.params.userId})
                        //.skip(2)
                        //.limit(3)
                        .then(posts => {
                            if (err) return res.sendStatus(400);

                            profileData.posts = posts;

                            res.send(JSON.stringify({
                                data: profileData,
                                resultCode: 0
                            }));


                        })

                })
        })



}

exports.editStatus = (req, res) => {
    const userId = req.cookies.auth;
    const status = req.body.status;

    UserModel.updateOne({_id: userId}, {$set: {status : status}}, (err, user) => {
        res.send(JSON.stringify({resultCode: 0}))
    })
}

exports.postPost = (req, res) => {

    const userId = req.body.userId;
    const authId = req.cookies.auth;
    const text = req.body.post;
    const avatar = req.body.avatar;
    const username = req.body.username;

    let date = new Date();

    let day = date.getDate();
    let month =  date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();

    date = `${day}.${month}.${year} ${hours}:${min}`;

    const post = new PostModel({
        receiver: userId,
        sender: authId,
        text: text,
        date: date,
        avatar: avatar,
        username: username
    })

    UserModel.findById(authId)
        .then(user => {
            post.username = user.username;
            post.avatar = user.avatar.small;

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

        })
}

exports.deletePost = (req, res) => {
    const postId = req.params.postId
    PostModel.deleteOne({_id: postId}, (err, result) => {
        res.send(JSON.stringify({
            message: 'Пост удалён!',
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

exports.editInfo = (req, res) => {
    const userId = req.cookies.auth;
    const info = req.body.info;
    //let arr = {firstName, surname, gender, country, city, school, university, organisation, faculty, profession, ...req.body}


    let profileInfo = {
        username: info.firstname + ' ' + info.surname,
        location: {
            country: info.country,
            city: info.city,
        },
        job: {
            organisation: info.organisation,
            profession: info.profession,
        },
        education: {
            school: info.school,
            university: info.university,
            faculty: info.faculty,
        },
        gender: info.gender,
        birth: info.birth,
    }

    UserModel.updateOne({_id: userId})
        .set(profileInfo)
        .then(result => {
            console.log(profileInfo)
            if (result){
                res.send(JSON.stringify({resultCode: 0}))
            } else {
                res.send(JSON.stringify({resultCode: 1}))
            }
        })
}


exports.getInfo = (req, res) => {
    const authId = req.cookies.auth;
    UserModel.findById(authId)
        .then(result => {
            res.send(JSON.stringify({
                    info: result,
                    resultCode: 0
                }
            ))
        })
}

