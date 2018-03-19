const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const secret = require('../config').secret
const jsonwebtoken = require('jsonwebtoken')
class UserController {
  static constructor() {}

  /**
   * 检查用户名是否重复
   */
  static async checkAccountExist(ctx) {
    const { username } = ctx.request.body
    let isExisted = await UserModel.findOne({username}).catch(e => ctx.throw(500,{ message: '服务器出错' }))
    if (!!isExisted) {
      ctx.send({code: '1', message: '账户已存在'})
    } else {
      ctx.send({code: '0', message: '可注册'})
    }
  }

  /**
   * 用户注册
   */
  static async register(ctx, next) {
    let { username, password } = ctx.request.body
    console.log(username,password)
    if(!password || !username) {
      ctx.throw(400,{ meaasge: '请输入密码和用户名'})
    }
    password = bcrypt.hashSync(password, 5)
    let isExisted = await UserModel.find({username})
    console.log(isExisted)
    if (!!isExisted.length) {
      ctx.status = 406;
      ctx.body = {
        message: '用户名已经存在',
        code: 1
      }
    } else {
      const newUser = new UserModel({
        username,
        password
      })
      const result = await newUser.save();
      ctx.body = {
        message: '注册成功',
        code: 0
      }
    }
    // ctx.body = ({status: 'ojbk', message:'this is a test'})
    // }
  }

  /**
   * 用户登录
   */
  static async login(ctx) {
    const { username, password} = ctx.request.body
    const user = await UserModel.findOne({ username });
    const checkPwd = bcrypt.compareSync(password, user.password)
    console.log(checkPwd)
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
      ctx.status = 401
      ctx.body = {
        message: '用户名或密码错误',
        code: 1
      }
    }
  }


  async regist11er(ctx) {
    const { body } = ctx.request;
    try {
      if (!body.username || !body.password) {
        ctx.status = 400;
        ctx.body = {
          error: `expected an object with username, password but got: ${body}`,
        }
        return;
      }
      body.password = await bcrypt.hash(body.password, 5)
      let user = await User.find({ username: body.username });
      if (!user.length) {
        const newUser = new User(body);
        user = await newUser.save();
        ctx.status = 200;
        ctx.body = {
          message: '注册成功',
          user,
        }
      } else {
        ctx.status = 406;
        ctx.body = {
          message: '用户名已经存在',
        }
      }
    } catch (error) {
      ctx.throw(500)
    }
  }




}

module.exports = UserController