import React from 'react';
import axios from "axios";
import CateBox from '../../components/cateBox/cateBox';
import SingleArticle from '../../components/singleArticle/singleArticle';
import InitCate from '../../components/initCate/initCate';
import { connect } from "react-redux";
import { chooseCate } from '../../redux/article.redux';
@connect(
    state => (
      { state: state.article}), 
      { chooseCate }
  )
export default class Category extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allArticleDate:[],
            cateData:[],
            choosedArticle:'',
        }
    }
    changeCate(cate){
       
       this.setState({
           choosed:cate
       })
       let data = this.state.cateData;
       let choosedArticle = [];
       data.map(v=>{
           if(v.cate===cate){ //1
               v.id.map(k=>{  //n
                   this.state.allArticleDate.map(j=>{
                        if(j._id===k){
                            choosedArticle.push(j)
                        }
                   })
               })
           }
       })
       this.setState({
        choosedArticle:choosedArticle
       })
       this.props.chooseCate(cate,choosedArticle);
    }
    DataToCate(data){
        var allcateDate = [];
        var allcate = [];
        data.map(v => {
          v.cate.map(k => {
            var single = {
              id: v._id,
              cate: k
            };
            allcate.push(k);
            allcateDate.push(single);
          });
        });
        
        function unique1(array) {
            var n = []; //一个新的临时数组
            for (var i = 0; i < array.length; i++) {
              if (n.indexOf(array[i]) === -1) n.push(array[i]);
            }
            return n;
          }
          allcate = unique1(allcate);
        
            var last = [];
            allcate.map(v => {
            var idArray = [];
            allcateDate.map(k => {
              if (k.cate === v) {
                idArray.push(k.id);
              }
            });
            var singlecatedate = {
              cate: v,
              num: idArray.length,
              id: idArray
            };
            last.push(singlecatedate);
          });
          return last;
    }
    componentWillMount(){
        let that = this;   
        if(this.props.state.allArticleData===""){   //当首页加载过，state中有数据，不发送请求
            axios.get("/api/post/list").then(res => {
                that.setState(
                  {
                      cateData: this.DataToCate(res.data.doc.reverse()),
                      allArticleDate:res.data.doc.reverse()
                  }
                );
              });
        }else{  //首页未加载，需要请求数据
            this.setState({
                cateData:this.DataToCate(this.props.state.allArticleData),
                allArticleDate:this.props.state.allArticleData
            })
        }
        if(this.props.state.pickCate!==""){
            this.setState({
                choosedArticle:this.props.state.pickCateArticle,
                choosed:this.props.state.pickCate
            })
        }
    }
    render(){
        let data = this.state.cateData;
        return(
            <div>
                {data ? 
                     <CateBox changeCate={this.changeCate.bind(this)} choosed={this.state.choosed} cateData={data} ></CateBox>
                    :null
                }
                {
                    this.state.choosedArticle ? 
                    <div key={this.state.choosedArticle}>
                        <SingleArticle articleData={this.state.choosedArticle} />
                    </div>
                    :
                    <InitCate />
                }
            </div>
        )
    }
}