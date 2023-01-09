const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const Contacts = mongoose.model("Contacts", ContactSchema);

module.exports = Contacts;
