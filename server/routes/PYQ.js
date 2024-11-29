const express = require('express');
const router = express.Router();

const PYQs = {
  "Data Structures And Algorithms": "https://drive.google.com/embeddedfolderview?id=1yxI5olpqdor1RAFJB8KaKyMWJtrDx2Qb#grid",
  "CAO": "https://drive.google.com/embeddedfolderview?id=#grid"
};


router.post("/", async (req, res) =>{
  console.log("Someone on PYQ page!!");
  const subject = req.body.subject;
  const PYQlink = PYQs[subject];
  res.json(PYQlink);
});

module.exports = router;