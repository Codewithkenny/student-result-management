const Student = require("../models/student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// function to create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  const token = jwt.sign({ id }, "Secret token string", {
    expiresIn: maxAge,
  });
  return token;
};

module.exports.login_get = (req, res) => {
  res.render("studentlogin");
};

module.exports.login_post = async (req, res) => {
  const { matric_number, password } = req.body;

  //   find student with matric_number
  const student = await Student.findOne({ matric_number });
  if (student) {
    // check if password match
    const auth = await bcrypt.compare(password, student.password);
    if (auth) {
      // create token
      const token = createToken(student._id);

      // send token to front end as cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        expiresIn: maxAge * 1000,
      });

      res.status(200).json(student);
    } else {
      res.json({
        message: "wrong password",
      });
    }
  } else {
    res.json({
      message: "Student with that matric number not found",
    });
  }
};

module.exports.signup_get = (req, res) => {
  res.render("studentsignup");
};

module.exports.signup_post = async (req, res) => {
  let { first_name, last_name, matric_number, password } = req.body;

  // encrypt password
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);

  // create new student
  const student = await Student.create({
    first_name,
    last_name,
    matric_number,
    password,
  });

  // create token
  const token = createToken(student._id);

  // send token to front-end as cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: maxAge * 1000,
  });
  res.status(201).json(student);
};
