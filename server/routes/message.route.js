const express = require('express');
const { getMessages, sendMessage } = require('../controllers/messages.controller');
const sendMessageMiddleware = require('../middlewares/twilio.middleware');

const messageRouter = express.Router();

messageRouter.get('/',getMessages )
messageRouter.post('/create/:id',sendMessageMiddleware,sendMessage)


module.exports = messageRouter;
