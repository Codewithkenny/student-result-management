const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    matric_number: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// create student model
const Student = mongoose.model("Student", studentSchema);

// export user model
module.exports = Student;

// create userSchema
// user names. email and paswo

// create user mode

// export user model
