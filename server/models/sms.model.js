const mongoose = require("mongoose");

const smsSchema = mongoose.Schema(
  {
    message:{type:String,required:true},
    contact:{type:mongoose.ObjectId,ref:'Contacts'}
  },
  {
    timestamps: true,
  }
);

const Messages = mongoose.model("Messages", smsSchema);

module.exports = Messages;
