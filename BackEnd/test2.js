const getdata = require('./controller/project/getGithub').getProjectData

;( async () => {
  getdata('vincedream/nodemail').then(r => {console.log(r)})
  // console.log(resulr)
})()