const Project = require('../models/Project')
const asyncHandler = require('express-async-handler')

// @desc Get all projects
// @route GET /projects
// @access Private
const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find().select().lean()
  if (!projects?.length) {
    return res.status(400).json({message: 'No projects found'})
  }
  res.json(projects)
})

// @desc Create new project
// @route POST /projects
// @access Private
const createNewProject = asyncHandler(async (req, res) => {
  const { creator, title, category, text, assigner, assignees } = req.body

  // Validate data
  if (!creator || !title || !category || !text) {
    return res.status(400).json({message: 'Some fields are required'})
  }

  const projectObj = { creator, title, category, text, assigner, assignees}

  // Create and store new project
  const project = await Project.create(projectObj)
  if (project) { // created
    res.status(201).json({message: `New project ${title} created`})
  } else {
    res.status(400).json({message: 'Invalid project data received'})
  }
})

// @desc Edit a project
// @route PATCH /projects
// @access Private
const editProject = asyncHandler(async (req, res) => {
  const { id, creator, title, category, text, assigner, assignees, completed } = req.body

  // Validate data
  if (!id || !creator || !title || !category || typeof completed !== 'boolean') {
    return res.status(400).json({message: 'Some fields are required'})
  }

  const project = await Project.findById(id).exec()
  if (!project) {
    return res.status(400).json({message: 'Project not found'})
  }

  project.title = title
  project.creator = creator
  project.category = category
  project.assigner = assigner
  project.assignees = assignees
  project.completed = completed

  const updatedProject = await project.save()

  res.json({message: `Project ${updatedProject.title} updated`})
})

// @desc Delete a project
// @route DELETE /projects
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({message: 'Project ID is required'})
  }

  const project = await Project.findById(id).exec()
  if (!project) {
    return res.status(400).json({message: 'Project not found'})
  }

  const result = await project.deleteOne()
  const msg = `Poject ${result.title} with ID ${result._id} deleted`
  res.json(msg)
})

module.exports = {
  getAllProjects,
  createNewProject,
  editProject,
  deleteProject
}