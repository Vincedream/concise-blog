const commentModel = require('../../models/comment')
const ArticleModel = require('../../models/article')
const filter = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>~！@#￥……&*（）——|{}【】‘；：”“'。，、？]", 'g') // 过滤敏感字


class ArticleController {
  static constructor() {}

  /**
   * 
   * @param {Object} article - 文章信息Object
   * @param {Array} skips - 不需要验证的key
   */
  static checkArticle(article, skips, ctx) {
    Object.keys(article).forEach(key => {
      if (skips.indexOf(key) == -1 && !Boolean(article[key])) {
        console.log('gggggggg',key)
        ctx.throw(400, {
          message: `字段${key}格式错误`
        })
      }
    })
  }

  /**
   * 查询结果为null是返回的数据
   */
  static resultIsNull(result, ctx) {
    if (result === null || ((result instanceof Array) && result.length === 0)) {
      ctx.throw(400,{
        message: '文章不存在'
      })
    }
  }
  
  /**
   * 添加文章
   */
  static async addArticle(ctx, next) {
    const req = ctx.request.body
    ArticleController.checkArticle(req, ['comments'], ctx)
    const result = await ArticleModel.create({...req}).catch( e => ctx.throw(500))
    ctx.status = 201
    ctx.send({message: '添加成功'})
  }
      
  /**
   * 修改文章
   */
  static async updateArticle(ctx, next) {
    const { id } = ctx.params
    const req = ctx.request.body
    // if (id)
    ArticleController.checkArticle(req, ['comments', ctx])
    const result = await ArticleModel.findByIdAndUpdate(id,{...req}).catch(e => ctx.throw(500))
    ArticleController.resultIsNull(result, ctx)
    ctx.send({message: '文章更新成功'})
  }

  /**
   * 删除文章
   */
  static async deleteArticle(ctx, next) {
    const { id } = ctx.params

    const result = await ArticleModel.findByIdAndRemove(id).catch(e => ctx.throw(500))
    ArticleController.resultIsNull(result, ctx)
    ctx.send({message: '删除文章成功'})
  }

  /**
   * 分页查询获取文章列表
   */
  static async getArticle(ctx, next) {
    let { page = 1, pageSize = 100 } = ctx.query
    console.log(page,pageSize)
    // 不知道为啥要这样
    page = +page
    pageSize = +pageSize
    const skip = page === 0 ? 0 : (page - 1) * pageSize
    const articles = await ArticleModel
      .find({})
      .select({content:0})
      .limit(pageSize)
      .skip(skip)
      .sort({releaseDate: -1})
      .exec()
      .catch( e => ctx.throw(500))
    const total = await ArticleModel
      .find({})
      .count()
      .catch(e => ctx.throw(500))
      ctx.send({ message: '获取成功', data: {
        items: articles,
        total
      } })
    }

  /**
   * 获取指定ID的文章
   */
  static async getArticleById(ctx, next) {
    const { id } = ctx.params
    const result = await ArticleModel
      .findById(id)
      .populate({
        path: 'comments',
      })
      .exec()
      .catch(e => ctx.throw(500))
    ArticleController.resultIsNull(result, ctx)
    // console.log(markdown(result.content))
    // let a = result.content
    // let markContent = markdown(a)
    // let result1 = {...result}
    // console.log(markContent)
    // let gg = {
    //   content: markContent,
      
    // }
    ctx.send({article:result})
  }


  /**
   * 模糊查询
   */
  static async getArticleByQuery(ctx, next) {
    let { keyword }= ctx.query
    // 过滤敏感词汇
    keyword = keyword.replace(filter, '')
    if (!keyword.length) {
      ctx.throw(400,{
        message: '无法找到类似文章'
      })
    }
    // 模糊查询条件
    const query = {}
    const reg = new RegExp(keyword, 'i')
    query.$or = [
      { classify: { $regex: reg } },
      { title: { $regex: reg } }
    ]

    const result = await ArticleModel
      .find(query)
      .select({content:0})
      .exec()
      .catch(e => ctx.throw(500))
    ArticleController.resultIsNull(result, ctx)
    ctx.status = 200
    ctx.send({
      items: result
    })
  }
}

module.exports = ArticleController