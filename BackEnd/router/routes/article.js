const ArticleController = require('../../controller/article')

module.exports = router => {
  router.post('/article/new/', ArticleController.article.addArticle)  // 添加文章
  router.get('/article', ArticleController.article.getArticleByQuery) // 模糊查询
  router.get('/article/all/', ArticleController.article.getArticle) // 分页获取文章

  router.get('/article/:id', ArticleController.article.getArticleById) // 获取指定ID文章
  router.patch('/article/:id', ArticleController.article.updateArticle) // 更新指定ID文章
  router.delete('/article/:id', ArticleController.article.deleteArticle) // 更新指定ID文章
}