const schedule = require('node-schedule')

var rule    = new schedule.RecurrenceRule();  
var times   = [1,6,11,16,21,26,31,36,41,46,51,56];  
rule.minute  = times2;
  
schedule.scheduleJob(rule, function(){  
    console.log("执行任务");    
});