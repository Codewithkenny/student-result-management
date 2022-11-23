const ReportCard = require("../models/reportcard");

module.exports.reportcard_post = async (req, res) => {
  const { student_id, course_id, report_card_id, score, grade } = req.body;

  const result = await ReportCard.create({
    student_id,
    course_id,
    report_card_id,
    score,
    grade,
  });
  res.json(ReportCard);
};
