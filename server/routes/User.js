const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const multer = require('multer');


// GET request to get details of the specific username's user
router.post("/login", async (req, res) =>{
  const userData = req.body;
  const username = userData.username;
  console.log(userData);

  const user = await User.findOne({ username });

  if(!user){
    res.status(200).json({ message: "Username does not exist" });
  }
  else{
    const password = user.password;
    if(password == userData.password)
      {res.status(200).json(user);}
    else {res.status(200).json({ message: "Incorrect password" });}
  }
});



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
    );
  },
});
const upload = multer({ storage: storage });

// A basic POST request to add a new User into database
router.post("/", upload.single('photo'), async (req, res) => {
  const userData = req.body; // Access the data sent in the POST request
  // Log the incoming data
  console.log('Received Data:', userData);

  // Create a new user using the Mongoose model
  const newUser = new User({
    username: userData.username,
    password: userData.password,
    profilePhoto: '',
    age: userData.age,
    school: userData.school
  });
  if (req.file) {
    newUser["profilePhoto"] =  req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
  }
  // Save the document into MongoDB
  const savedUser = await newUser.save();
  res.json(savedUser);
});



module.exports = router;