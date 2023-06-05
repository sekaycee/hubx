const mongoose = require('mongoose')
const { Schema, model } = mongoose
const AutoIncrement = require('mongoose-sequence')(mongoose)

const projectSchema = new Schema(
  {
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
      required: true
    },
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    files: [{
      name: String,
      path: String
    }],
    thumbnails: [{
      url: String,
      title: String
    }],
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    shareholders: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    timestamps: true
  }
)

projectSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500
})

module.exports = model('Project', projectSchema)