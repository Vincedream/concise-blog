const TestController = require('../../controller/testapi')

module.exports = router => {
  router.get('/test', TestController.test1.testTodo)
  router.put('/test/get', TestController.test1.testTodoList)
  router.post('/post', TestController.test1.testPost)
}