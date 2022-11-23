const { Router } = require("express");
const reportcardcontroller = require("../controllers/reportcardcontroller");

// create router object
const router = Router();

// create to get result
router.post("/reportcard", reportcardcontroller.reportcard_post);
// router.get("/results", reportcardcontroller.results_get);

module.exports = router;
