const { Router } = require("express");
const studentcontroller = require("../controllers/studentcontroller");
const { isStudent } = require("../middlewares/checkUser");
const requireAuth = require("../middlewares/requireAuth");


// create router object
const router = Router();

// create routes
router.get("/signup", studentcontroller.signup_get);
router.post("/signup", studentcontroller.signup_post);

// single student
router.get('/student/:id', requireAuth, isStudent, studentcontroller.get_single_student)
router.get('/student/:id/results', requireAuth, isStudent, (req, res)=> {})
router.get("/login", studentcontroller.login_get);
router.post("/login", studentcontroller.login_post);

// router.get("/logout", studentcontroller.logout_get);

module.exports = router;
