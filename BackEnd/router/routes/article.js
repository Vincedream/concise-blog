const ArticleController = require('../../controller/article')

module.exports = router => {
  router.post('/article/new', ArticleController.article.addArticle)
}