const Image = require("../models/Upload");
const cloudinary = require("../config/cloudinary");


// Delete image from Cloudinary + MongoDB
const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;

    // Find in DB
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(image.public_id);

    // Delete from MongoDB
    await Image.findByIdAndDelete(id);

    res.json({ message: "Image deleted successfully", id });
  } catch (err) {
    console.error("Delete failed:", err);
    res.status(500).json({ message: "Failed to delete image" });
  }
};

module.exports = { deleteImage };
