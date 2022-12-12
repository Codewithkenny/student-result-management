const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.sign_up_get = (req, res) => {};
module.exports.sign_up_post = (req, res) => {};
module.exports.login_get = (req, res) => { res.json({message: "admin"})};
module.exports.login_post = (req, res) => {};
module.exports.get_single_admin= (req, res) => {};

