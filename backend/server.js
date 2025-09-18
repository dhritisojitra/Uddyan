const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');

const Course = require('./models/Course');
const authRouter = require('./auth/authRouter');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection
const MONGODB_URI = 'mongodb+srv://dhritisojitra25_db_user:uTXvfiKTYzIVwUl4@cluster0.gc1iw7q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch(err => console.error(err));

// Multer Storage Configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Serve Static Uploads
app.use('/uploads', express.static('uploads'));

// API Routes
app.use('/api/auth', authRouter);

app.get('/api/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/courses', authMiddleware, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const { title, description } = req.body;
        const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;

        const newCourse = new Course({
            title,
            description,
            imageUrl
        });

        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});