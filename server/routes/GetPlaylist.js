const express = require('express');
const router = express.Router();

const playlists = {
  "Data Structures And Algorithms": [
    {"title": "Striver DSA series", "link":"https://www.youtube.com/embed/videoseries?si=Asg6PmBkFHy25-hR&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"},
    {"title": "Love babbar DSA series", "link": "https://www.youtube.com/embed/videoseries?si=sUhVpVGn75IkRzuF&amp;list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA"},
    {"title": "Knowledge Gate One shot", "link": "https://www.youtube.com/embed/MdG0Vw9f1A4?si=r0sTQzSaR1oNPhp9"}
  ],
  "Operating Systems": [
    {"title": "Gate Smashers playlist", "link": "https://www.youtube.com/embed/videoseries?si=r_ESREXGvz8J9Y_K&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"},
    {"title": "Love Babbar Placement Series", "link": "https://www.youtube.com/embed/videoseries?si=6Soc3gst_BDSV_WF&amp;list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG"},
    {"title": "Neso Academy playlist", "link": "https://www.youtube.com/embed/videoseries?si=fy9ngJNs7i7vEtEq&amp;list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"}
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