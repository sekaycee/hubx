const User = require('../models/User')
const Project = require('../models/Project')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {

})

// @desc Create new user
// @route POST /users
// @access Private
const createNewUser = asyncHandler(async (req, res) => {

})

// @desc Edit a user
// @route PATCH /users
// @access Private
const editUser = asyncHandler(async (req, res) => {

})

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler(async (req, res) => {

})

module.exports = {
  getAllUsers,
  createNewUser,
  editUser,
  deleteUser
}