const express = require('express');
const router = express.Router();


//GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts' })
});

//GET single workout
router.get('/:id', (req, res) => {
  res.json({ msg: 'GET single workout' })
});

//POST new workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    console.log(err);
    res.status(400).json({msg: err.message})
  }
});

//DELETE single workout
router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE single workout' })
});

//UPDATE a workout
router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE a workout' })
});

module.exports = router;