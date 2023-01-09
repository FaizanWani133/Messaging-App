const Contacts = require("../models/contacts.model");
const Messages = require("../models/sms.model");

async function getMessages(req, res) {
  try {
    const messages = await Messages.find()
      .sort({ date: -1 })
      .populate("contact", "firstName lastName");
    return res.status(200).send(messages);
  } catch (error) {
    return res.status(500).send(error);
  }
}

async function sendMessage(req, res) {
  try {
    
    const { id } = req.params;
    // console.log(id)
    const { message } = req.body;
    const contact = await Contacts.findOne({_id:id});
    if (!contact) return res.status(404).send({ error: "Contact not found" });
    // console.log('reached')
    
    const response = await Messages.create({ contact: id, message });
    return res.status(200).send({response,message:'Message sent Successfully'});
  } catch (error) {
    return res.status(500).send({ error });
  }
}

module.exports = {
  sendMessage,
  getMessages,
};
