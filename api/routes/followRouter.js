const express = require('express');
const followRouter = express.Router();
const followController = require('../controllers/followController.js');

followRouter.post('/', followController.follow);
followRouter.delete('/', followController.unfollow);

module.exports = followRouter;