const User = require("../auth/authModel.js"); // your Mongoose model

 const getUserData = async (req, res) => {
  try {
    const userId = req.userId; // from your middleware

    // Fetch only the username
    const user = await User.findById(userId, "username"); // projection: only username

    if (user) {
      res.json({
        success: true,
        username: user.username
      });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (err) {
    console.error("getUserData error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
 module.exports = getUserData;