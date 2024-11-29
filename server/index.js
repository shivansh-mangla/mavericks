const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

//Router
const newsRouter = require('./routes/News');
app.use("/news", newsRouter);  // uses the route /news

const getPlaylistRoyer = require('./routes/GetPlaylist');
app.use("/subjectPlaylist", getPlaylistRoyer);

const getHostelInfoRouter = require('./routes/GetHostelInfo');
app.use('/hostelInfo', getHostelInfoRouter);

const PYQRouter = require('./routes/PYQ');
app.use('/PYQ', PYQRouter)

const questionsRouter = require('./routes/Questions');
app.use('/questions', questionsRouter)

const userRouter = require('./routes/User');
app.use("/user", userRouter);  // uses the route /user


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Serve static files from the "uploads" directory

app.listen(3001, ()=>{
  console.log("Server running on port 3001");
})