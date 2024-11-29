const express = require('express');
const router = express.Router();

const playlists = {
  "Data Structures And Algorithms": [
    {"title": "Striver DSA series", "link":"https://www.youtube.com/embed/videoseries?si=Asg6PmBkFHy25-hR&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"},
    {"title": "Love babbar DSA series", "link": "https://www.youtube.com/embed/videoseries?si=sUhVpVGn75IkRzuF&amp;list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"},
    {"title": "Knowledge Gate One shot", "link": "https://www.youtube.com/embed/MdG0Vw9f1A4?si=r0sTQzSaR1oNPhp9"}
  ],
  "Operating Systems": [
  ],
  "Software Engineering": [
  ],
  "Computer Networks": [
  ]
};


router.post("/", async (req, res) =>{
  // res.send("Hello World");
  console.log("Someone on subject Playlist page!!");
  const subject = req.body.subject;
  console.log(subject);
  const playlist = playlists[subject];
  res.json(playlist);
});

module.exports = router;