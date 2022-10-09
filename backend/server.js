const express = require('express');
require('dotenv').config();

////////Express app and port////////////
const app = express();
const PORT = process.env.PORT || 6900;
const workoutRoutes = require('./routes/workouts.js');


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(express.json());

///////////ROUTES/////////////////////
app.use('/api/workouts',workoutRoutes)

/////////listen for requests///////////////
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

