const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController.js');

usersRouter.get('/delete', usersController.deleteAll);
usersRouter.get('/', usersController.users);

module.exports = usersRouter;