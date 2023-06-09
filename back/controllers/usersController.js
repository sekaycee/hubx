const User = require('../models/User')
const Project = require('../models/Project')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean()
  if (!users?.length) {
    return res.status(400).json({message: 'No users found'})
  }
  res.json(users)
})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body

  // Validate data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({message: 'All fields are required'})
  }

  // Check for duplicate
  const duplicate = await User.findOne({ username }).lean().exec()
  if (duplicate) {
    return res.status(409).json({message: 'Duplicate username'})
  }

  // Hash password
  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObj = { username, "password": hashedPwd, roles }

  // Create and store new user
  const user = await User.create(userObj)
  if (user) { // created
    return res.status(201).json({message: `New user ${username} created`})
  }
  res.status(400).json({message: 'Invalid user data received'})
})

// @desc Edit a user
// @route PATCH /users
// @access Private
const editUser = asyncHandler(async (req, res) => {
  const { id, username, password, roles, active } = req.body

  // Validate data
  if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
    return res.status(400).json({message: 'All fields are required'})
  }

  const user = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({message: 'User not found'})
  }

  // Check for duplicate
  const duplicate = await User.findOne({username}).lean().exec()
  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({message: 'Dupicate username'})
  }

  user.username = username
  user.roles = roles
  user.active = active
  if (password) { // Hash password
    user.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updatedUser = await user.save()

  res.json({message: `${updatedUser.username} updated`})
})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({message: 'User ID is required'})
  }

  const project = await Project.findOne({user: id}).lean().exec()
  if (project) {
    return res.status(400).json({message: 'User has assigned projects'})
  }

  const user = await User.findById(id).exec()
  if (!user) {
    return res.status(400).json({message: 'User not found'})
  }

  const result = await user.deleteOne()
  const msg = `Username ${result.username} with ID ${result._id} deleted`
  res.json(msg)
})

module.exports = {
  getAllUsers,
  createNewUser,
  editUser,
  deleteUser
}