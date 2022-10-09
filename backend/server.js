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


/////////listen for requests///////////////
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});

