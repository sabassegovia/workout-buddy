const Workout = require('../models/workoutModel.js');
const mongoose = require('mongoose');


//GET all workouts
const getAllWorkouts = async (req, res) => {
    const allWorkouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(allWorkouts);

}

//GET single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const singleWorkout = await Workout.findById(id);

  if(!singleWorkout) {
    return res.status(404).json({ error: "No such workout" });
  }
  return res.status(202).json(singleWorkout);
}

//POST new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  //add to doc DB
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({msg: err.message})
  }
}

//DELETE single workout
const deleteWorkout = async (req, res) => {

}

//UPDATE a workout
const updateWorkout = async (req, res) => {

}

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout
}