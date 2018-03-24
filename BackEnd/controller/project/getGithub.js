// const schedule = require('node-schedule')

// var rule     = new schedule.RecurrenceRule();
// var times    = [1,6,11,16,21,26,31,36,41,46,51,56];
// rule.second  = times;
// schedule.scheduleJob(rule, function(){
//     console.log("执行任务");
// });
const axios = require("axios");

function getProjectData(fullname) {
  return new Promise((resolve, reject) => {
    const url = `https://api.github.com/repos/${fullname}`;
    axios
      .get(url)
      .then(result => {
        let resultData = result.data;
        if (!!resultData) {
          let data = {
            fullName: resultData.full_name,
            description: resultData.description,
            language: resultData.language,
            htmlUrl: resultData.html_url,
            stars: resultData.stargazers_count,
            forks: resultData.forks
          };
          resolve(data);
        }
      })
      .catch(e => {
        if (e.response.status === 404) {
            /**
             * TODO: 当查询错误时候，返回数据过慢，影响错误提醒
             */
          reject(e.response.status);
        } else {
          reject(e.message);
        }
      });
  });
}

module.exports = {
  getProjectData
};
