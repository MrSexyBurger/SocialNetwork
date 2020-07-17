const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controllers/profileController.js')

profileRouter.get('/:userId', profileController.profile);
profileRouter.get('/status/:userId', profileController.getStatus);
profileRouter.put('/status', profileController.editStatus);

module.exports = profileRouter;