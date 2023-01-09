const Contacts = require("../models/contacts.model");



async function getContacts(req,res){
    try {
        const contacts = await Contacts.find();
        return res.status(200).json(contacts);
        
    } catch (error) {
        // console.log(error);
        return res.status(500).json(error);
        
    }
}
async function getContactById(req,res){
    try {
        const {id} = req.params
        const contact = await Contacts.findById(id);
        return res.status(200).json(contact);
        
    } catch (error) {
        return res.status(500).json(error);
        
    } 
}

module.exports = {
    getContacts,
    getContactById

}