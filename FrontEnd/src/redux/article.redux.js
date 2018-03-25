import axios from "../config/axios"

const GET_ARTICLE_DATA = "GET_ARTICLE_DATA"

const initState = {
  total: 0,
  items: []
}

export function article(state = initState, action) {
  switch (action.type) {
    case GET_ARTICLE_DATA:
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
        pageSize: 10
      }
    })
    try {
      let result = await getData
      if (result.status === 200) {
        dispatch(getArticleSuccess(result.data.data))
      }
    } catch (e) {
      console.log(e)
    }
  }
}