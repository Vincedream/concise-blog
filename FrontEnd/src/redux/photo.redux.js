import axios from "../config/axios"

const GET_PHOTO_DATA = 'GET_PHOTO_DATA';
const LOAD_IMAGE = 'LOAD_IMAGE';
const initState={
    photoData:'',
    currentData:'',
    nextDataTitle:'',
    typeNum:2
}

export function photo(state=initState,action){
    switch(action.type){
        case GET_PHOTO_DATA:
            return {...state,...action.payload};
        case LOAD_IMAGE:
            return {...state,...action.payload}
        default:
            return state
    }
}

function getDataSuccess(data){
    return{type:GET_PHOTO_DATA,payload:data}
}

export function getPhotoData(state) {
  return async dispatch => {
    const getData = axios.get('/photo')
    try {
      let result = await getData
      let allData = result.data.items.reverse()
      if (result.status === 200) {
        let data = {
          photoData:allData,
          currentData:allData.slice(0,2),
          nextDataTitle:allData[2].title
      }
      dispatch(getDataSuccess(data))
      }
    } catch (e) {
      console.log(e)
    }
  }
}

function loadSuccess(data) {
    return{type:LOAD_IMAGE,payload:data}
}

export function loadMoreImage() {
    return (dispatch,getData)=>{
      const { typeNum, photoData } = getData().photo
        if(typeNum >= photoData.length-1){
            let imgData = {
                nextDataTitle:"Good things will happen",
                currentData:photoData.slice(0,typeNum+1)
            }
            dispatch(loadSuccess(imgData))
        }else{
            let imgData = {
                typeNum:typeNum+1,
                nextDataTitle:photoData[typeNum+1].title,
                currentData:photoData.slice(0,typeNum+1)
            }
            dispatch(loadSuccess(imgData))
        }
    }
}