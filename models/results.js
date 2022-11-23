const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const course = require("./course");
const Student = require("./student");
const reportCard = require("./reportcard");

const resultSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: Student,
    required: true,
  },
  course_id: {
    type: Schema.Types.ObjectId,
    ref: course,
    required: true,
  },
  report_card_id: {
    type: Schema.Types.ObjectId,
    ref: reportCard,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("result", resultSchema);

module.exports = Result;
