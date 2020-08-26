const DialogModel = require('../models/dialog');
const UserModel = require('../models/user');




exports.getDialog = (req, res) => {
    const dialogId = req.params.dialogId;
    let userId = req.cookies.auth;

    DialogModel.findOne({_id: dialogId})
        .then(dialogData => {

            userId = dialogData.author === userId ? dialogData.recipient : dialogData.author;

            UserModel.findById(userId)
                .then(user => {
                    res.send(JSON.stringify({
                        dialogId: dialogData._id,
                        userInfo: {
                            id: user._id,
                            username: user.username,
                            avatar: user.avatar.small
                        },
                        messages: dialogData.messages,
                        resultCode: 0
                    }))
                })
        })
}



exports.newDialogs = (req, res) => {

    let userId = req.cookies.auth;

    UserModel.findOne({_id: userId}, (err, profile) => {
        if (err) return res.sendStatus(400);

        UserModel.find({_id: profile.friends}).then(friends => {

            friends = friends.map( result => {
                let friend = {
                    id: result._id,
                    username: result.username,
                    avatar: result.avatar.small
                }
                return friend
            })

            res.send(friends)
        })

    });
}



exports.postDialog = (req, res) => {
    let userId = req.cookies.auth;
    let recipientId = req.body.recipientId;


    const dialog = new DialogModel({
        author: userId,
        recipient: recipientId
    });

    DialogModel.findOne()
        .and([
            { $or: [{author: userId},{recipient: userId}] },
            { $or: [{author: recipientId},{recipient: recipientId}] },
            ]

        )
        .then(dialogData => {
            console.log(dialogData)
            if (dialogData === null) {
                dialog.save((err, dialog) => {
                    UserModel.findOne({_id: recipientId})
                        .then(user => {
                            res.send(JSON.stringify({
                                    dialogId: dialog._id,
                                    userInfo: {
                                        id: user._id,
                                        username: user.username,
                                        avatar: user.avatar.small
                                    },
                                    messages: [],
                                    resultCode: 0
                                }
                            ));
                        })
                });
            } else {
                UserModel.findById(recipientId)
                    .then(user => {
                        res.send(JSON.stringify({
                            dialogId: dialogData._id,
                            userInfo: {
                                id: user._id,
                                username: user.username,
                                avatar: user.avatar.small
                            },
                            messages: dialogData.messages,
                            resultCode: 0
                        }))
                    })
            }

        })
        .catch(error => { /!*error logic here*!/ })


}

exports.showDialogs = (req, res) => {
    DialogModel.find().then(result => {
        res.send(JSON.stringify({result}));
    })
}


exports.getDialogs = (req, res) => {

    let userId = req.cookies.auth;

    DialogModel.find()
        .or([{author: userId}, {recipient: userId}])
        .then(dialogsData => {

            let usersIds = dialogsData.map( dialog => {
                return dialog.author === userId ? dialog.recipient : dialog.author;
            } );

            UserModel.find({_id: usersIds})
                .then( users => {
                    let dialogsObj = dialogsData.map( (dialog, i) => {
                        let message = dialog.messages[dialog.messages.length - 1] ? dialog.messages[dialog.messages.length - 1] : null;
                        return {
                            _id: dialog._id,
                            username: users[i].username,
                            avatar: users[i].avatar.small,
                            message: message
                        }
                    });

                    res.send(JSON.stringify({
                        dialogs: dialogsObj,
                        resultCode: 0
                    }))

                })


        });
}




exports.delDialogs = (req, res) => {
    DialogModel.deleteMany().then(result => {
        res.send(JSON.stringify({
            result: 'all deleted!'
        }))
    })
}

exports.putMessage = (req, res) => {
    let author = req.cookies.auth;
    let dialogId = req.body.dialogId;
    let recipientId = req.body.recipientId;
    let message = req.body.message;

    let date = new Date();

    let day = date.getDate();
    let month =  date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let min = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();

    date = `${day}.${month}.${year} ${hours}:${min}`;

    DialogModel.updateOne({_id: dialogId}, {$push: {messages : {author: author, text: message, date: date}}}, (err, result) => {
        res.send(JSON.stringify({
            message: {
                author: author,
                text: message,
                date: date
            },
            resultCode: 0
        }))
    })

}




/*
exports.postDialog = (req, res) => {

    const dialog = new DialogModel({
        author: {
            id: '5f325040fe784b034c1e7535',
            avatar: 'Avatar.png',
            username: 'Alex Tregubov'
        },
        receiver: {
            id: '5f325040fe784b034c1e755',
            avatar: 'Avatar.png',
            username: 'Божена Бигун'
        },
        message: 'Тестовое сообщение'
    })

    dialog.save( (err, post) => {
        res.send('message posted')
    } )
}*/
