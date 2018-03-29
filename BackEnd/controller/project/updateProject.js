var schedule = require("node-schedule");  
const ProjectModel = require('../../models/project')
const featchData = require('./getGithub').getProjectData
const rule = new schedule.RecurrenceRule();  
const times = [1]  
rule.hour  = times;  

async function updateProject() {
  const projectArr = await ProjectModel.find({})
  for (var a = 0; a < projectArr.length; a++) {
    const result = await featchData(projectArr[a].fullName)
    const update = await ProjectModel.findByIdAndUpdate(projectArr[a].id,{...result})
    console.log(a)
    console.log(update)
  }
}


schedule.scheduleJob(rule, function(){
  console.log('------------')
  updateProject()
});