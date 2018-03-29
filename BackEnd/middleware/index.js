const cors = require('koa2-cors')
const logger = require('./logger')
const bodyParser = require('koa-bodyparser')
const koaJwt = require('koa-jwt')
const secret = require('../config').secret
const errorHandle = require('./error-handler')
const json = require('./json')

module.exports = (app) => {
  app.use(errorHandle())
  app.use(logger())
  app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PATCH'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  }))
  app.use(koaJwt({secret}).unless({path: [
    /^\/register/,
    /^\/user/,
    /^\/login/,
    /^\/comment/,
    /^\/article/,
    /^\/project/,
  ]}))
  app.use(bodyParser())
  app.use(json())
}

