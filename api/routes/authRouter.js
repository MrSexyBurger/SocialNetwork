const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController.js');

authRouter.get('/me', authController.me);
authRouter.post('/login', authController.login);
authRouter.delete('/logout', authController.logout);
authRouter.put('/registration', authController.registration);

module.exports = authRouter;