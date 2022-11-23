const { Router } = require("express");
const courseController = require("../controllers/coursecontroller");

// create router object
const router = Router();

// create route to get all courses
router.get("/courses/", courseController.course_get);

// create to add a new course
router.get("/courses/create", courseController.createcourse_get);
router.post("/courses/create", courseController.createcourse_post);

// route to get a single course
router.get("/courses/:id", courseController.singlecourse_get);

// // route to get a result
// router.get("/result", courseController.result_get);

module.exports = router;
