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
router.post('/:id', (req, res) => {
  console.log('id:', req.body);
  res.json({ msg: 'POST new workout' })
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