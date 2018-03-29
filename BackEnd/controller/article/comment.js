const CommentModel = require("../../models/comment")
const ArticleModel = require('../../models/article')
const SubscribeModel = require("../../models/subscribe")

class CommentController {
  static constructor() {}

  /**
   * 添加评论
   */
  static async addComment(ctx, next) {
    let { subscribe,articleId, ...data } = ctx.request.body
    const email = data.email
    if(subscribe){
      CommentController.addSubscribe(email,ctx)
    }
    const commentResult = await CommentModel.create({articleId,...data}).catch(e => ctx.throw(500))
    const commentId = commentResult._id
    const articleUpdate = await ArticleModel.findByIdAndUpdate(articleId,{
      $push:{
        comments: commentId
      }
    })
    ctx.status = 201
    ctx.send({
      message: '添加评论成功'
    })
  }

  /**
   * 添加订阅用户
   */

  static async addSubscribe(email, ctx){
    const userEmail = await SubscribeModel.find({email}).catch( e => ctx.throw(500))
    if (userEmail.length === 0) {
      SubscribeModel.create({email}).catch(e => ctx.throw(500))
    }
  }

  /**
   * 取消订阅
   */
  static async deleteSubscribe(ctx, next) {
    const { email } = ctx.request.email
    const result = await SubscribeModel.findByIdAndRemove({email}).catch( e => ctx.throw(500))
  }

  /**
   * 获取评论
   */
  static async getComment(ctx, next) {
    const result = await CommentModel.find({}).populate({path:'articleId'}).exec().catch( e => ctx.throw(500))
    ctx.send({
      item: result
    })
  }
}

module.exports = CommentController