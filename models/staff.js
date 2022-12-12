const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    dept: {
      type: String,
    },
    role: {
      type: String,
      default: "staff",
    },
  },
  { timestamps: true }
);
const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
