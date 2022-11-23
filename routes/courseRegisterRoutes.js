const { Router } = require("express");
const courseRegister = require("../controllers/courseregistercontroller");

// create router object
const router = Router();

// create routes
router.get("/register", courseRegister.register_course_get);
router.post("/register", courseRegister.register_course_post);

// router.get("/logout", studentcontroller.logout_get);

module.exports = router;
