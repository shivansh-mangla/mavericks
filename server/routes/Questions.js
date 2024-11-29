const express = require('express');
const router = express.Router();
const Question = require('../models/questionsModel');


router.get("/", async (req, res) =>{
  console.log("Someone on questions page!!");
  const listOfQuestions = await Question.find();
  res.json(listOfQuestions);
});

router.post("/", async (req, res) =>{
  console.log(req.body);
  const { username, profilePhoto, question } = req.body;

  const newQuestion = new Question({
    username: username,
    profilePhoto: profilePhoto || "https://via.placeholder.com/150",
    body: question,
  });

  const savedQuestion = await newQuestion.save();

  res.status(201).json(savedQuestion);
});

module.exports = router;