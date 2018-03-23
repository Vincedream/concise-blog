const ArticleModel = require('../../models/article')


class ArticleController {
  static constructor() {}
  static async addArticle(ctx, next) {
    const req = ctx.request.body

    /**
     * TODO 添加请求字段的验证
     */

     console.log(req)
     ctx.send(11111)
  }
}

module.exports = ArticleController