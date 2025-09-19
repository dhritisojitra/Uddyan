// models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    contact: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
