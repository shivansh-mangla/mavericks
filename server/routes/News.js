const express = require('express');
const router = express.Router();
const News = require('../models/newsModel');


// A basic GET request to get list of all News
router.get("/", async (req, res) =>{
  // res.send("Hello World");
  console.log("Someone on news page!!");
  const listOfNews = await News.find();
  res.json(listOfNews);
});

module.exports = router;