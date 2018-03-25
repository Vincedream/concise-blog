import axios from "../config/axios"

const GET_PHOTO_DATA = "GET_PHOTO_DATA"

const initState = {
  total: 0,
  items: []
}

export function photo(state = initState, action) {
  switch (action.type) {
    case GET_PHOTO_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

function getPhotoSuccess(obj) {
  return { type: GET_PHOTO_DATA, payload: obj }
}

/**
 * 获取所有照片数据
 */
export function getPhotoData() {
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
        dispatch(getPhotoSuccess(result.data.data))
      }
    } catch (e) {
      console.log(e)
    }
  }
}