// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('./models/Contact');

// Get contact info
router.get('/', async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Update contact info
router.put('/', async (req, res) => {
  try {
    const {email, contact, address } = req.body;
    let contactDoc = await Contact.findOne();
    if (!contactDoc) {
      contactDoc = new Contact({email, contact, address });
    } else {
      contactDoc.email = email;
      contactDoc.contact = contact;
      contactDoc.address = address;
    }
    await contactDoc.save();
    res.json(contactDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
