require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRouter = require('./auth/authRouter');
const contactRoutes = require('./contactController'); 
const middlewareRouter  = require('./middleware/middlewareRouter');
const app = express();
const PORT = process.env.PORT || 5000;
const uplaodRouter = require('./Images/upload');
const fetchImagesRouter = require('./Images/FetchImages');

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

// ✅ Rate limiting (esp. for login/register routes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max requests per IP
  standardHeaders: true,
  legacyHeaders: false,
});

// MongoDB Atlas Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch(err => console.error(err));

//for login logout
app.use('/api/auth', authRouter);
app.use("/api/auth", limiter);

//for editing contacts
app.use('/api/contact', contactRoutes);

//for context
app.use('/api/user', middlewareRouter);

app.use('/api/images', uplaodRouter);

app.use('/api/uploads', fetchImagesRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
