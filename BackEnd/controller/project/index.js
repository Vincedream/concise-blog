const ProjectModel = require('../../models/project')
const getProjectData = require('./getGithub.js').getProjectData

class ProjectController {
  static constructor() {}

  static async getProject(ctx, next) {
    const result = await ProjectModel.find({}).select({__v:0}).exec().catch(e => ctx.throw(500))
    ctx.send({
      items: result
    })
  }

  static async searchProject(ctx, next) {
    const { name } = ctx.request.body
    const result = await getProjectData(name).catch(e => {
      if (e === 404) {
        ctx.throw(404,{
          message: '项目查询失败'
        })
      } else {
        ctx.throw(500)
      }
    })
    ctx.send({
      item: result
    })
  }

  static async addProject(ctx, next) {
    const req = ctx.request.body
    const result = await ProjectModel.create({...req}).catch(e => ctx.throw(500))
    ctx.send({
      message: '添加成功'
    })
  }

  static async deleteProject(ctx, next) {
    const { id } = ctx.params
    const result = await ProjectModel.findByIdAndRemove(id).catch(e => ctx.throw(500))
    ctx.send({
      message: '删除成功'
    })
  }

}

module.exports = ProjectController