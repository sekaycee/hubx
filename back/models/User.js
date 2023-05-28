const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
    default: "Employee"
  }],
  active: {
    type: Boolean,
    default: true
  },
  projects: [{
    type: Schema.Types.ObjectId,
    required: false,
    ref: 'Project'
  }]
})

module.exports = model('User', userSchema)