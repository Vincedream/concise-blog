import axios from 'axios';

const GET_PHOTO_DATA = 'get photo data';
const LOAD_IMAGE = 'load image';
const initState={
    photoData:'',
    currentData:'',
    nextDataTitle:'',
    typeNum:2
}

export function photo(state=initState,action){
    switch(action.type){
        case GET_PHOTO_DATA:
            return {...state,photoData:action.payload.photoData,currentData:action.payload.currentData,nextDataTitle:action.payload.nextDataTitle};
        case LOAD_IMAGE:
            return {...state,typeNum:action.payload.typeNum,nextDataTitle:action.payload.nextDataTitle,currentData:action.payload.currentData}
        default:
            return state
    }
}

function getDataSuccess(data){
    return{type:GET_PHOTO_DATA,payload:data}
}

export function getPhotoData(state) {
    return dispatch=>{
        if(state.currentData===""){
            axios.get("/api/photo/list").then(res => {
                let allData = res.data.doc.reverse()
                let data = {
                    photoData:allData,
                    currentData:allData.slice(0,2),
                    nextDataTitle:allData[2].title
                }
                dispatch(getDataSuccess(data))
              });
        }
        
    }
}

function loadSuccess(data) {
    return{type:LOAD_IMAGE,payload:data}
}

export function loadMoreImage(data) {
    return dispatch=>{
        if(data.typeNum>=data.photoData.length-1){
            let imagedata = {
                typeNum:data.typeNum,
                nextDataTitle:"Good things will happen",
                currentData:data.photoData.slice(0,data.typeNum+1)
            }
            dispatch(loadSuccess(imagedata))
        }else{
            let imagedata = {
                typeNum:data.typeNum+1,
                nextDataTitle:data.photoData[data.typeNum+1].title,
                currentData:data.photoData.slice(0,data.typeNum+1)
            }
            dispatch(loadSuccess(imagedata))
        }
    }
}