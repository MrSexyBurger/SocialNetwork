const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controllers/profileController.js')

profileRouter.get('/:userId', profileController.profile);

profileRouter.get('/status/:userId', profileController.getStatus);
profileRouter.put('/status', profileController.editStatus);

profileRouter.get('/posts/:userId', profileController.getPosts);
profileRouter.delete('/posts/:postId', profileController.deletePost);
profileRouter.post('/posts', profileController.postPost);
profileRouter.put('/posts', profileController.editPost);



//for dev only!
profileRouter.get('/postTest/123', profileController.postTest);
profileRouter.get('/postTest/del', profileController.delAll);



module.exports = profileRouter;