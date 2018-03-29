const ProjectController = require('../../controller/project/index')

module.exports = router => {
  router.get('/user/project', ProjectController.getProject)
  router.post('/project', ProjectController.addProject)
}