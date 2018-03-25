import axios from "../config/axios"

const GET_PROJECT_DATA = "GET_PROJECT_DATA"

const initState = {
  items: []
}

export function project(state = initState, action) {
  switch (action.type) {
    case GET_PROJECT_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

function getProjectSuccess(obj) {
  return { type: GET_PROJECT_DATA, payload: obj }
}

/**
 * 获取所有项目数据
 */
export function getProjectoData() {
  return async dispatch => {
    const getData = axios.get('/project/',)
    try {
      let result = await getData
      if (result.status === 200) {
        dispatch(getProjectSuccess(result.data))
      }
    } catch (e) {
      console.log(e)
    }
  }
}