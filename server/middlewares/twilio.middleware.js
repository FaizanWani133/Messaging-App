require('dotenv').config();
const accountSid = 'AC179a824e524fd0a5888db7daca20aa4a'; 
const authToken = '0306ee54fb374ed8836429b75fa3ae00'; 
const client = require('twilio')(accountSid, authToken);

function sendMessageMiddleware(req, res, next) {
    const { message } = req.body;
    client.messages
        .create({
            body: message,
            from:'+15106164267',
            to: '+919810153260'
        })
        .then(() => {
            // call next function
            return next();
        })
        .catch(error => {
            // send error response
            return res.status(500).send({
                error: error.message,
                reached:"middleware"
            });
        });
}

module.exports = sendMessageMiddleware;
