const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projectsController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
  .get(projectsController.getAllProjects)
  .post(projectsController.createNewProject)
  .patch(projectsController.editProject)
  .delete(projectsController.deleteProject)

module.exports = router