const UserController = require('../../controller/user')

module.exports = router => {
  router.post('/register', UserController.register)
  router.post('/login', UserController.login)
}

