const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: String,
  public_id: String,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imageSchema);
