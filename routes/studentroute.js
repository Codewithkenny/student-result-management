const { Router } = require("express");
const studentcontroller = require("../controllers/studentcontroller");

// create router object
const router = Router();

// create routes
router.get("/signup", studentcontroller.signup_get);
router.post("/signup", studentcontroller.signup_post);

router.get("/login", studentcontroller.login_get);
router.post("/login", studentcontroller.login_post);

// router.get("/logout", studentcontroller.logout_get);

module.exports = router;
