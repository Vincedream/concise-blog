import axios from "../config/axios"

const GET_ARTICLE_DATA = "GET_ARTICLE_DATA"
const LOAD_MORE_ARTICLE = "LOAD_MORE_ARTICLE"
const CHANGE_CLASS_TYPE = "CHANGE_CLASS_TYPE"

const initState = {
  total: 0,
  items: [],
  loadItems: [],
  loadTotal: 8,
  choseType:''
}

export function article(state = initState, action) {
  switch (action.type) {
    case GET_ARTICLE_DATA:
      return {...state, ...action.payload}
    case LOAD_MORE_ARTICLE:
      return {...state, ...action.payload}
    case CHANGE_CLASS_TYPE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

function getArticleSuccess(obj) {
  return { type: GET_ARTICLE_DATA, payload: obj }
}

/**
 * 获取所有文章数据
 */
export function getArticleData() {
  return async dispatch => {
    const getData = axios.get('/article/all/',{
      params: {
        page: 1,
        pageSize: 100
      }
    })
    try {
      let result = await getData
      if (result.status === 200) {
        let data = result.data.data
        let tmp = initData(data.items)
        let allItems = data.items.slice(0)  // 浅拷贝数组
        dispatch(getArticleSuccess({
          items:data.items,
          total:data.total,
          loadItems: allItems.splice(0,8),
          classObj:tmp
        }))
      }
    } catch (e) {
      console.log(e)
    }
  }
}


function loadMoreSuccess(obj) {
  return { type: LOAD_MORE_ARTICLE, payload: obj }
}

export function loadMore(obj){
  return (dispatch, getState) => {
    let data = getState().article
    let items = data.items
    let total = data.total
    let loadTotal = data.loadTotal
    if (loadTotal >= total-5 ) {
      let loadData = {
        loadTotal: total,
        loadItems: items.slice(0,total)
      }
      dispatch(loadMoreSuccess(loadData))
    } else {
      let loadData = {
        loadTotal: loadTotal + 5,
        loadItems: items.slice(0,loadTotal + 5)        
      }
      dispatch(loadMoreSuccess(loadData))
    }
  }
}

export function changeType(key){
  let obj = {
    choseType: key
  }
  return { type: CHANGE_CLASS_TYPE, payload: obj }
}




function initData(items){
  var classItems = {
  }
  for(var key in items) {
    let classarray = items[key].classify
    for(var skey in classarray) {
      let classNode = classarray[skey]
      if (!classItems.hasOwnProperty(classNode)){
        classItems[classNode]=[]
        let a = items[key]
        classItems[classNode].push(a)
      }else{
        let a = items[key]
        classItems[classNode].push(a)
      }
    }
  }
  return classItems
}