require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts.js');
const PORT = process.env.PORT || 6900;

const app = express();
///////////MIDDLEWARE///////////
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


///////////ROUTES/////////////////////
app.use('/api/workouts',workoutRoutes)


//////////CONNECT TO DB////////////
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to DB')
    app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  })
  .catch((err) => {console.log(err)})