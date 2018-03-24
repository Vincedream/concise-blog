const ProjectController = require('../../controller/project/index')

module.exports = router => {
  router.get('/project', ProjectController.getProject)
  router.post('/project', ProjectController.addProject)
}