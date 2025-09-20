const jwt = require("jsonwebtoken");

 const userAuth = async (req, res, next) => {
  const token = req.cookies.token; // cookie-parser makes this available

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authorized. Login again" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.user && decoded.user.id) {
      req.userId = decoded.user.id; // cleaner than modifying req.body
      return next();
    } else {
      return res.status(401).json({ success: false, message: "Not authorized. Login again" });
    }
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};
module.exports = userAuth;

