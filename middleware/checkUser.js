const Student = require("../models/student");
const checkUser = (res, req) => {
const token = req.cookies.jwt;

  // check if jwt token exist
  if (token) {
    // verify token
    jwt.verify(token, "Secret token string", (err, decodedToken) => {
      // if verification fails
      if (err) {
        res.redirect("/login");
      } else {
        return Student.findById(decodedToken);
      }
    });
  } else {
    //no jwt in cookies
    res.redirect("/login");
  }
};
module.exports = checkUser;
