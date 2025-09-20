// routes/upload.js
const express = require("express");
const router = express.Router();
const Image = require("../models/Upload"); // adjust path to your model

// Get all uploaded images
router.get("/all", async (req, res) => {
  try {
    console.log("Fetching all images from database");
    const images = await Image.find().sort({ createdAt: -1 }); // latest first
    res.json(images); // send array of images
  } catch (err) {
    console.error("Error fetching images:", err);
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

module.exports = router;

