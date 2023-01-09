const mongoose = require('mongoose');

module.exports = () => {
  return new Promise((resolve, reject) => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('DB connection established')
        return resolve();
      })
      .catch((err) => {
        console.log('connection failed')
        return reject(err);
      });
  });
};