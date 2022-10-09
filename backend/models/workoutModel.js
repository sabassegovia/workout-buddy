const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Structure of document
const workoutSchema = new Schema({
  title: {
    type: String,
    unique: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);