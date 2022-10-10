const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

//Structure of document
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

//Static signup Method
userSchema.statics.signup = async function(email, password) {
  //first check if email already exists in DB
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email is already registered");
  }

  //Salting password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
}

module.exports = mongoose.model('User', userSchema);