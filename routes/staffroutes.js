const { Router } = require("express");
const staffcontroller = require("../controllers/staffcontroller");

// create router object
const router = Router();

// create routes
router.get("/staff", staffcontroller.login_get);
router.post("/staff/login", staffcontroller.login_post);
router.get("/staff", staffcontroller.sign_up_get);
router.post("/staff/signup", staffcontroller.sign_up_post);

router.get("/staff/:id", staffcontroller.get_single_staff);

module.exports = router;
