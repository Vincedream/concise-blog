module.exports = () => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      console.log(err)
      const statusCode = err.statusCode || err.status || 500
      const errMsg = err.message || '服务器错误'
      ctx.response.status = statusCode

      if (statusCode === 401) {
        ctx.status = 401
        ctx.response.body = {message: '验证错误'}
      } else if (statusCode === 500) {
        console.log(err)
      
        /**
         * TODO 服务器错误提醒记录邮件
         */
      } else {
        ctx.response.body = { errMsg }
      }
    }
  }
  // return next().catch((err) => {

  //   if (err.status === 401) {
  //     ctx.status = 401
  //     ctx.body = {
  //       error: err.originalError ? err.originalError.message : err.message,
  //     }
  //   } else {
  //     throw err
  //   }
  // })
}