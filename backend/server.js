const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 6900;
const workoutRoutes = require('./routes/workouts.js');


///////////MIDDLEWARE///////////
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

//////////CONNECT TO DB////////////
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT},\nConnected to MongoDB`);
    });
  })
  .catch((err) => {console.log(err)})


  ///////////ROUTES/////////////////////
app.use('/api/workouts',workoutRoutes)


