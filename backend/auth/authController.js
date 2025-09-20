const User = require('./authModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// LOGIN ONLY
const login = async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Issue JWT
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        const oneHour = 60 * 60 * 1000;
        
      res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",       // true on Render (https)
    sameSite: "lax", // CSRF protection
    maxAge: oneHour, // 1hr
  });

    res.status(200).json({ message: 'Login successful'});

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error during login' });
  }
};


// Logout logic
 const logout = (req, res) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: false, // change to true in production (HTTPS)
    sameSite: 'Lax',
  });

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};

module.exports = { login , logout};
