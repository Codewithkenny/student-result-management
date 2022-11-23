const Student = require("../models/student");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
// function to create json web token
const createToken = (id) => {
  const token = jwt.sign({ id }, "Secret token string", {
    expiresIn: maxAge,
  });
  return token;
};

module.exports.signup_get = (req, res) => {
  res.render("signup");
};
module.exports.signup_post = async (req, res) => {
  let { username, email, password } = req.body;

  // encrypt password
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);

  // create new user
  const student = await Student.create({
    username,
    email,
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

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  // find user by email
  const student = await Student.findOne({ email: req.body.email });
  if (student) {
    // check if password match
    const auth = await bcrypt.compare(password, student.password);

    if (auth) {
      // create token
      const token = createToken(student._id);

      // send token to front-end as cookie
      res.cookie("jwt", token, {
        httpOnly: true,
        expiresIn: maxAge * 1000,
      });
      res.status(201).json(student);
    } else {
      res.json({
        message: "wrong password",
      });
    }
  } else {
    res.json({
      message: "no student with this email",
    });
  }
};
module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", {
    expiresIn: 1,
  });
  res.redirect("/");
};
