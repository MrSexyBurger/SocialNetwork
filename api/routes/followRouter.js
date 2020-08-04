const express = require('express');
const followRouter = express.Router();
const followController = require('../controllers/followController.js');

followRouter.put('/', followController.follow);
followRouter.delete('/:userId', followController.unfollow);

module.exports = followRouter;