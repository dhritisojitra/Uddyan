require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Course = require('./models/Course');
const authRouter = require('./auth/authRouter');
const authMiddleware = require('./middleware/userAuth');
const contactRoutes = require('./contactController'); 

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch(err => console.error(err));


app.use('/api/auth', authRouter);

app.use('/api/contact', contactRoutes);
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
