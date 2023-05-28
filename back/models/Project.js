const mongoose = require('mongoose')
const { Schema, model } = mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose)

const projectSchema = new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'Translation'
    },
    text: {
      type: String,
      required: true
    },
    assigner: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'User'
    },
    assignees: [{
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'User'
    }],
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

module.exports = model('Project', projectSchema)