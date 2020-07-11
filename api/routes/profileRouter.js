const express = require('express');
const profileRouter = express.Router();
const profileController = require('../controllers/profileController.js')

profileRouter.get('/:userId?', profileController.profile);

module.exports = profileRouter;