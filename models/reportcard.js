const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const student = require("./student");

const reportCardSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: student,
    require: true,
  },
  cgpa: {
    type: Number,
    require: true,
  },
});

const reportCard = mongoose.model("report card", reportCardSchema);

module.exports = reportCard;
