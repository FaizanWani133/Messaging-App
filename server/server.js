require('dotenv').config()
const express = require('express');
const connectDatabase = require('./DBconnect/db')
const cors = require('cors');
const contactRouter = require('./routes/contacts.route');
const messageRouter = require('./routes/message.route');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contacts',contactRouter)
app.use('/api/messages',messageRouter)

connectDatabase().then(()=>{
    app.listen(process.env.PORT || 8080,(err)=>{
        if(err){
                    return console.log(err);
    }
        console.log(`server listening on port ${process.env.PORT}`)
    })
})

