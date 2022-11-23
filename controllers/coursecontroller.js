const Course = require("../models/course");

module.exports.course_get = async (req, res) => {
  // to get all courses from database
  const courses = await Course.find();

  res.render("courses/courses", { courses });
};
module.exports.singlecourse_get = async (req, res) => {
  // get single course
  const id = req.params.id;

  const course = await Course.findById(id);

  res.render("courses/singlecourse", { course });
};
module.exports.createcourse_get = (req, res) => {
  res.render("courses/createcourse");
};

module.exports.createcourse_post = async (req, res) => {
  //  create course
  const { course_code, course_title, course_unit } = req.body;

  const course = await Course.create({
    course_code,
    course_title,
    course_unit,
  });
  res.json(course);
};
