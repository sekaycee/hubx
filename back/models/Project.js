const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const projectSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    categories: [{
      type: String,
      default: 'Translation'
    }],
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

projectSchema.plugin(AutoIncrement, {
  inc_field: 'code',
  id: 'codeNums',
  start_seq: 1000
})

module.exports = mongoose.model('Project', projectSchema)