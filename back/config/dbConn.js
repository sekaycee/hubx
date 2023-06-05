const { connect } = require('mongoose')

const connectDB = async () => {
  try {
    await connect(process.env.DATABASE_URI)
  } catch(err) {
    console.log(err)
  }
}

module.exports = connectDB