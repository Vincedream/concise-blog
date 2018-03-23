const filter = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>~！@#￥……&*（）——|{}【】‘；：”“'。，、？]", 'g') // 过滤敏感字

let keyword = '62`~!@#$^43'
keyword = keyword.replace(filter, '')

console.log(keyword)