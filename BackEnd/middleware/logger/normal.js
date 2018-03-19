const log4js = require('log4js')

module.exports = async (method, url, status, start = 0) => {
  // console.log(method, url, status, start)
  log4js.configure(
    {
      appenders: {
        normal: { type: 'dateFile', filename: 'log/normal/access.log', keepFileExt: true}
      },
      categories: { default: { appenders: ['normal'], level: 'info'} }
    }
  )
  const logger = log4js.getLogger('normal')
  const responseTime = (Date.now() - start)
  logger.info(`${method} ${url} 响应时间为: ${responseTime / 1000}s`)

  

}