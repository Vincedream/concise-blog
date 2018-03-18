import axios from 'axios';

const GET_ARTICLE_DATA = 'get article data';
const LOAD_MORE_ARTICLE = 'load more article';
const CHOOSE_CATE = 'shoose cate';
const initState={
    loadNum:6,
    loadData:'',
    allArticleNum:'',
    allArticleData:'',
    pickCate:'',
    pickCateArticle:''
}

export function article(state=initState,action){
    switch(action.type){
        case GET_ARTICLE_DATA:
            return {...state,allArticleData:action.payload.allArticleData,loadData:action.payload.loadData,allArticleNum:action.payload.allArticleNum};
        case LOAD_MORE_ARTICLE:
            return{...state,loadNum:action.payload.loadNum,loadData:action.payload.loadData}
        case CHOOSE_CATE:
            return{...state,pickCate:action.payload.cate,pickCateArticle:action.payload.article}
        default:
            return state
    }
}

function getDataSuccess(data){
    return{type:GET_ARTICLE_DATA,payload:data}
}

export function getArticleData(state) {
    return dispatch=>{
        if(state.allArticleData===""){
            axios.get("/api/post/list").then(res => {
                let allData = res.data.doc.reverse();
                let allNum = allData.length;
                let data={
                    allArticleData:allData,
                    allArticleNum:allNum,
                    loadData:allData.slice(0,6)
                } 
                dispatch(getDataSuccess(data))
              });
        }
    }
}
function loadSuccess(data){
    return{type:LOAD_MORE_ARTICLE,payload:data}
}
export function loadMoreArticle(state){
    return dispatch=>{
        const loadNum = state.loadNum;
        const allArticleNum = state.allArticleNum;
        const allArticleData = state.allArticleData;
        if(loadNum >=allArticleNum-5){
            let loadData = {
                loadNum:allArticleNum,
                loadData:allArticleData.slice(0,allArticleNum)
            }
            dispatch(loadSuccess(loadData))
        }else{
            let loadData = {
                loadNum:loadNum+5,
                loadData:allArticleData.slice(0,loadNum+5)
            }
            dispatch(loadSuccess(loadData))
        }
    }
}

function chooseSuccess(data){
    return {type:CHOOSE_CATE,payload:data}
}

export function chooseCate(cate,article){
    return dispatch=>{
        let data={
            cate:cate,
            article:article
        }
        dispatch(chooseSuccess(data))
    }
}