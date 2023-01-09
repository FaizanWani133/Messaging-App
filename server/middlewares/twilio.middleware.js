require('dotenv').config();
const accountSid = 'AC179a824e524fd0a5888db7daca20aa4a'; 
const authToken = 'c57c856ba6d049f853684c13600ac0b3'; 
const client = require('twilio')(accountSid, authToken);

function sendMessageMiddleware(req, res, next) {
    const { message } = req.body;
    client.messages
        .create({
            body: message,
            from:'+15106164267',
            to: '+917006846972'
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
