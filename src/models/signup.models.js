const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  role: { type: String, enum: ['user', 'host'], default: 'user' },
  phoneNumber: {
    type: String,
    required: true
  },
  recapcha: {
    type: String,
    required: true
  },
  newPassword: {
    type: String
  }
}, {
  timestamps: true,
});

const signupModel = mongoose.model("Signup", signupSchema)
module.exports = signupModel