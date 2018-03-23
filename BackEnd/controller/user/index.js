const jwt = require('jsonwebtoken')
const UserModel = require('../../models/user')
const bcrypt = require('bcrypt')
const secret = require('../../config').secret
const jsonwebtoken = require('jsonwebtoken')
class UserController {
  static constructor() {}
  /**
   * 用户注册
   */
  static async register(ctx, next) {
    let { username, password } = ctx.request.body
    if(!password || !username) {
      ctx.throw(400,{ message: '请输入密码和用户名'})
    }
    password = bcrypt.hashSync(password, 5)
    let isExisted = await UserModel.find({username})
    if (!!isExisted.length) {
      ctx.throw(406, {
        message: `用户已存在`
      })
    } else {
      const result = await UserModel.create({ username, password }).catch( e => ctx.throw(500))
      ctx.status = 201
      ctx.send({message: '注册成功'})
    }
  }

  /**
   * 用户登录
   */
  static async login(ctx) {
    const { username, password} = ctx.request.body
    const user = await UserModel.findOne({ username });
    const checkPwd = bcrypt.compareSync(password, user.password)
    if (checkPwd) {
      ctx.status = 200
      ctx.body = {
        message: '登录成功',
        code: 0,
        // 生成 token 返回给客户端
        token: jsonwebtoken.sign({
          data: user,
          // 设置 token 过期时间
          exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
        }, secret),
      }
    } else {
      ctx.throw(401, {
        message: `用户名或密码错误`
      })
    }
  }

}

module.exports = UserController