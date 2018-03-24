const CommentModel = require("../../models/comment")

class CommentController {
  static constructor() {}

  /**
   * 添加评论
   */
  static async addComment(ctx, next) {
    let { articleId, ...data } = ctx.request.body
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