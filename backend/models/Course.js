const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',   // reference to your User model
      required: true,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    category: {
      type: String,
      enum: ['Web Development', 'Data Science', 'AI', 'Design', 'Other'],
      default: 'Other',
    },
    lessons: [
      {
        title: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],
  },
  { timestamps: true } // auto adds createdAt and updatedAt
);

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
