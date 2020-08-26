const express = require('express');
const dialogsRouter = express.Router();
const dialogsController = require('../controllers/dialogsController.js')

//profileRouter.get('/:userId', profileController.profile);
//profileRouter.put('/status', profileController.editStatus);
//profileRouter.delete('/posts/:postId', profileController.deletePost);
//profileRouter.post('/posts', profileController.postPost);
dialogsRouter.get('/newDialogs', dialogsController.newDialogs);
dialogsRouter.post('/postDialog', dialogsController.postDialog);
dialogsRouter.put('/putMessage', dialogsController.putMessage);
dialogsRouter.get('/', dialogsController.getDialogs);
dialogsRouter.get('/getDialog/:dialogId', dialogsController.getDialog);

//for dev only!
//profileRouter.get('/postTest/123', profileController.postTest);
//profileRouter.get('/postTest/del', profileController.delAll);
dialogsRouter.get('/all', dialogsController.showDialogs);
dialogsRouter.get('/del', dialogsController.delDialogs);
//dialogsRouter.get('/postMessage', dialogsController.postDialog);


module.exports = dialogsRouter;