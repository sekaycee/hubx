const Project = require('../models/Project')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all projects
// @route GET /projects
// @access Private
const getAllProjects = asyncHandler(async (req, res) => {

})

// @desc Create new project
// @route POST /projects
// @access Private
const createNewProject = asyncHandler(async (req, res) => {

})

// @desc Edit a project
// @route PATCH /projects
// @access Private
const editProject = asyncHandler(async (req, res) => {

})

// @desc Delete a project
// @route DELETE /projects
// @access Private
const deleteProject = asyncHandler(async (req, res) => {

})

module.exports = {
  getAllProjects,
  createNewProject,
  editProject,
  deleteProject
}