const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controllers/profileController.js')

profileRouter.get('/:userId', profileController.profile);
profileRouter.put('/status', profileController.editStatus);
profileRouter.delete('/posts/:postId', profileController.deletePost);
profileRouter.post('/posts', profileController.postPost);




//for dev only!
profileRouter.get('/postTest/123', profileController.postTest);
profileRouter.get('/postTest/del', profileController.delAll);



module.exports = profileRouter;