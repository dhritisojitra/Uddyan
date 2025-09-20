require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const authRouter = require('./auth/authRouter');
const contactRoutes = require('./contactController'); 
const middlewareRouter  = require('./middleware/middlewareRouter');
const app = express();
const PORT = process.env.PORT || 5000;
const uplaodRouter = require('./Images/upload');
const fetchImagesRouter = require('./Images/FetchImages');

app.use(cors({
  origin: "http://localhost:5173", // your Vite frontend
  credentials: true,              // allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser());

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch(err => console.error(err));

//for login logout
app.use('/api/auth', authRouter);

//for editing contacts
app.use('/api/contact', contactRoutes);

//for context
app.use('/api/user', middlewareRouter);

app.use('/api/images', uplaodRouter);

app.use('/api/uploads', fetchImagesRouter);

/*
app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
*/


// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
