const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    course_code: {
      type: String,
      required: true,
    },
    course_title: {
      type: String,
      requred: true,
    },
    course_unit: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);

module.exports = Course;
