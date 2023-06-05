const Project = require('../models/Project')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

// @desc Get all projects 
// @route GET /projects
// @access Private
const getAllProjects = asyncHandler(async (req, res) => {
  // Get all projects from MongoDB
  const projects = await Project.find().lean()

  // If no projects 
  if (!projects?.length) {
    return res.status(400).json({ message: 'No projects found' })
  }

  // Add username to each project before sending the response 
  // See Promise.all with map() here: https://youtu.be/4lqJBBEpjRE 
  // You could also do this with a for...of loop
  const projectsWithUser = await Promise.all(projects.map(async (project) => {
    const user = await User.findById(project.creator).lean().exec()
    return { ...project, creator: user.username }
  }))

  res.json(projectsWithUser)
})

// @desc Create new project
// @route POST /projects
// @access Private
const createNewProject = asyncHandler(async (req, res) => {
  const { creator, title, category, text } = req.body

  // Confirm data
  if (!creator || !title || !category || !text) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicate title
  const duplicate = await Project.findOne({ title }).lean().exec()
  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate project title' })
  }

  // Create and store the new project 
  const project = await Project.create({ creator, title, category, text })
  if (project) { // Created 
    return res.status(201).json({ message: 'New project created' })
  } else {
    return res.status(400).json({ message: 'Invalid project data received' })
  }
})

// @desc Update a project
// @route PATCH /projects
// @access Private
const editProject = asyncHandler(async (req, res) => {
  const { id, creator, title, category, text, completed, files, thumbnails, manager, shareholders } = req.body

  // Confirm data
  if (!id || !creator || !title || !category || !text || typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Confirm project exists to update
  const project = await Project.findById(id).exec()
  if (!project) {
    return res.status(400).json({ message: 'Project not found' })
  }

  // Check for duplicate title
  const duplicate = await Project.findOne({ title }).lean().exec()

  // Allow renaming of the original project 
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'Duplicate project title' })
  }

  project.creator = creator
  project.title = title
  project.category = category
  project.text = text
  project.completed = completed
  project.files = files
  project.thumbnails = thumbnails
  project.manager = manager
  project.shareholders = shareholders

  const updatedProject = await project.save()

  res.json(`'${updatedProject.title}' updated`)
})

// @desc Delete a project
// @route DELETE /projects
// @access Private
const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.body

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: 'Project ID required' })
  }

  // Confirm project exists to delete 
  const project = await Project.findById(id).exec()
  if (!project) {
    return res.status(400).json({ message: 'Project not found' })
  }

  const result = await project.deleteOne()

  const reply = `Project '${result.title}' with ID ${result._id} deleted`

  res.json(reply)
})

module.exports = {
  getAllProjects,
  createNewProject,
  editProject,
  deleteProject
}