const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim:true,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
    default: 'Client'
  }],
  active: {
    type: Boolean,
    default: true
  }
},
{ timestamps: true }
)

module.exports = model('User', userSchema)