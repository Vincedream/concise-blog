const PhotoModel = require("../../models/photo")

class PhotoController {
  static constructor() {}

  static async addPhoto(ctx, next) {
    const req = ctx.request.body
    const result = await PhotoModel.create({...req}).catch( e => ctx.throw(500))
    ctx.status = 201
    ctx.send({message: '添加成功'})
  }

  static async getPhoto(ctx, next) {
    const result = await PhotoModel.find({}).select({__v:0}).exec().catch(e => ctx.throw(500))
    ctx.send({
      items: result
    })
  }

  static async addArticle(ctx, next) {
    const req = ctx.request.body
    const htmlContent = markdown(req.content)
    ArticleController.checkArticle(req, ['comments'], ctx)
    const result = await ArticleModel.create({...req, htmlContent}).catch( e => ctx.throw(500))
    ctx.status = 201
    ctx.send({message: '添加成功'})
  }
}

module.exports = PhotoController