const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  //   console.log(req.cookies.jwt);
  const token = req.cookies.jwt;

  //   check if jwt token exists
  if (token) {
    // verify token
    jwt.verify(token, "Secret token string", (err, decodedToken) => {
      // if verification fails
      if (err) {
        res.redirect("/login");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    // no jwt in cookies
    res.redirect("/login");
  }

  next();
};

module.exports = requireAuth;
