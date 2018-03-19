class TestController {
  static constructor() {}


  static async testTodo(ctx, next) {
    // ctx.body = ({status: 'ojbk', message:'this is a test'})
    // ctx.throw(403, { message: '非管理员禁止查看用户列表' })
    ctx.send(11111)

  }
  static async testTodoList(ctx, next) {
    // ctx.body = ({status: 'ojbk', message:'this is a test'})
    // throw new Error('hhh')

    // ctx.send(222)
    ctx.throw(500)
    

  }
  static async testPost(ctx, next) {
    console.log(ctx.request.body)
    ctx.body = ({status: 'ojbk', message:'this is a test'})
  }


}

module.exports = TestController