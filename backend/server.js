const express = require('express');
require('dotenv').config();

////////Express app and port////////////
const app = express();
const PORT = process.env.PORT || 6900;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

///////////ROUTES/////////////////////
app.get('/', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

app.get('/workouts', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

app.post('/workouts', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

app.get('/workouts/:id', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

app.delete('/workouts/:id', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

app.patch('/workouts/:id', (req, res) => {
  res.json({ response: "Welcome to the app" });
})

/////////listen for requests///////////////
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

