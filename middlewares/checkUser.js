require("dotenv").config();
const jwt = require("jsonwebtoken");
const Student = require("../models/student");
const Staff = require("../models/staff");
const Admin = require("../models/admin");

const tokenKey = process.env.TOKEN_KEY;

const verifyToken = (req) => {
  const token = req.cookies.jwt;

  //verify token
  jwt.verify(token, tokenKey, (err, decodedToken) => {
    if (err) {
      console.log(err.message);
      // redirect to login
      res.redirect("/login");
    } else {
      return decodedToken;
    }
  });
};

const isStudent = (req, res, next) => {
  // get id from decoded token
  const id = verifyToken(req);

  //find student with decoded id
  Student.findById(id)
    .then((student) => {
      // continue execution of route
      next();
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Access Denied, Not Authorized" });
    });
};

const isStaff = (req, res, next) => {
  // get id from decoded token
  const id = verifyToken(req);

  //find student with decoded id
  Staff.findById(id)
    .then((staff) => {
      // continue execution of route
      next();
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Access Denied, Not Authorized" });
    });
};

const isAdmin = (req, res, next) => {
  // get id from decoded token
  const id = verifyToken(req);

  //find student with decoded id
  Admin.findById(id)
    .then((admin) => {
      // continue execution of route
      next();
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Access Denied, Not Authorized" });
    });
};

module.exports = {
  isStudent,
  isStaff,
  isAdmin,
};
