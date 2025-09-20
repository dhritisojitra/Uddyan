// routes/upload.js
const express = require("express");
const router = express.Router();
const Image = require("../models/Upload"); // Your schema

// Save Cloudinary URL to MongoDB
router.post("/save", async (req, res) => {
  try {
    const { url, public_id } = req.body;

    const newImage = new Image({ url, public_id });
    await newImage.save();

    res.json({ message: "Image saved successfully", image: newImage });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
