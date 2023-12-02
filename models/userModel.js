const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,    
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  position: {
    type: String,
    default: 'user'
  },
  description: {
    type: String,
    default: "",
  },
  message: {
    type: Array,
  },
  token: {
    type: String,
  }

}, { timestamps: true })
module.exports = mongoose.model('User', userSchema)

