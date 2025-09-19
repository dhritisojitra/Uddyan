const User = require('./authModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;

    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Compare password with hash
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Create JWT payload
    const payload = {
      user: { id: user.id }
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login.' });
  }
};
