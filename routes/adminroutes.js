const { Router } = require("express");
const admincontroller = require("../controllers/admincontroller");
const requireAuth = require("../middlewares/requireAuth");

// create router object
const router = Router();

// create routes
router.get("/admin", requireAuth, admincontroller.login_get);
router.post("/admin/login", admincontroller.login_post);
router.get("/admin", admincontroller.sign_up_get);
router.post("/admin/signup", admincontroller.sign_up_post);

router.get("/admin/:id", admincontroller.get_single_admin);

module.exports = router;
