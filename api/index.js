const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app); //создаём http для соккета!
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer'); //для передачи файлов

const io = require('socket.io')(http); // http передаём соккету

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.all('*', function(req, res,next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  /*responseSettings.AccessControlAllowOrigin*/ 'http://localhost:3000');
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }


});




var storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        //let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, file.originalname);
    }
});

app.use(multer({storage: storageConfig}).single("image")); // поле обзываем в соответствием с настройками multer





const authRouter = require('./routes/authRouter');
const usersRouter = require('./routes/usersRouter')
const followRouter = require('./routes/followRouter');
const profileRouter = require('./routes/profileRouter');
const dialogsRouter = require('./routes/dialogsRouter');

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/follow', followRouter);
app.use('/profile', profileRouter);
app.use('/dialogs', dialogsRouter);

//for test only
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

/*io.on('connection', socket => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('disconnected');
    })
})

io.on('connection', socket => {
    socket.on('chat message', message => {
        console.log(message)
        io.emit('chat message', message);
    })
})*/


const getVisitors = () => {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients);
    let users = sockets.map(s => s.user);
    return users;
}

const emitVisitors = () => {
    io.emit('visitors', getVisitors());
}



const emitOnlineUsers = () => {
    io.emit('usersOnline', getVisitors());
}



/*const isOnline = (id) => {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients);
    let users = sockets.map(s => s.user);
    console.log(users.filter(u => u && u.id == id).length > 0)
    return users.filter(u => u && u.id == id).length > 0;
}*/

const isUserOnline = (id) => {
    let clients = io.sockets.clients().connected;
    let sockets = Object.values(clients);
    let users = sockets.map(s => s.user);
    return users.filter(u => u && u.id == id).length > 0;
}

const emitIsUserOnline = (id, socket) => {
    socket.emit('isUserOnline', isUserOnline(id));
}

io.on('connection', (socket) => {

    /*socket.on('new visitor', user => {
        socket.user = user;
        socket.broadcast.emit('newUserOnline', user.id);
    })

    socket.on('isUserOnline', id => {
        emitIsUserOnline(id, socket)
    })


    socket.on('disconnect', () => {
        let connectionMessage = socket.user.id;
        io.emit('userDisconnected' , connectionMessage)
    })*/

});


mongoose.connect('mongodb://localhost:27017/social_db', {useNewUrlParser: true, useUnifiedTopology: true}, err => {
    if (err) return console.log(err);

    http.listen(9000, () => { //для socket.io используем именно http или app
        console.log('server is listening');
    })
})
