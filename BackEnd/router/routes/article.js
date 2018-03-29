const ArticleController = require('../../controller/article')

module.exports = router => {
  router.get('/user/article', ArticleController.article.getArticleByQuery) // 模糊查询
  router.get('/user/article/all/', ArticleController.article.getArticle) // 分页获取文章
  router.get('/user/article/:id', ArticleController.article.getArticleById) // 获取指定ID文章
  router.post('/user/comment',ArticleController.comment.addComment) // 添加评论
  
  router.post('/article/new/', ArticleController.article.addArticle)  // 添加文章
  router.patch('/article/:id', ArticleController.article.updateArticle) // 更新指定ID文章
  router.delete('/article/:id', ArticleController.article.deleteArticle) // 删除指定ID文章
  
  router.get('/comment',ArticleController.comment.getComment) // admin获取评论

}