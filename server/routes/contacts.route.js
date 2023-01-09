const express = require('express');
const { getContacts, getContactById } = require('../controllers/contacts.controller');

const contactRouter = express.Router();

contactRouter.get('/',getContacts )
contactRouter.get('/:id',getContactById)


module.exports = contactRouter;
