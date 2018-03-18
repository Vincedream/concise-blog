import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import axios from "axios";
import QueueAnim from 'rc-queue-anim';
import CommentInput from '../../components/commentInput/commentInput';
import CommentsList from '../../components/commentsList/commentsList';
import { connect } from "react-redux";
@connect(
  state => (
    { state: state.article})
)
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: "Type some *markdown* here!",
      commentData:''
     };
  }
  loadComments(){
    axios({
      method:"get",
      url:"/api/comments/find",
      params:{
        postid:this.props.match.params.id
      }
    }).then(res=>{
      if(res.status===200&&res.data.code===0){
        this.setState({
          commentData:res.data.doc
        })
      }else{
      }
    })
  }
  componentWillMount() {
    var postId = this.props.match.params.id;
    const AllData = this.props.state.allArticleData;
    if(AllData===""){   //当该页面不是从首页跳转过来时，请求数据
      let that = this;
      axios.get("/api/post/find",{
          params: {
              id: postId
            }
      }).then(res => {
        that.setState(
          {
            value: res.data.doc[0]
          }
        );
      }).catch(function (error) {
        });
    }else{  //当从首页跳转过来，直接从state中获取数据，无需再次发起请求
      AllData.map(v=>{
        if(v._id===postId){
          this.setState({
            value:v
          })
        }
      })
    }
    this.loadComments();
  }
 reloadComment(){
  this.loadComments();
 }
  render() {
      const ArticleBox = styled.div`
      position: relative;
      width: 680px;
      left: 50%;
      margin-left: -340px;
      color: #555;
      font-size: 14px;
      line-height: 28px;
      img {
        max-width: 630px;
        margin: 0 auto;
        border: 1px solid #ddd;
      }
      a {
        color: #555;
        text-decoration: none;
        border-bottom: 1px solid #999;
        word-wrap: break-word;
      }
      a:hover {
        color: #807e7e;
      }
      table {
        border-spacing: 0;
        border: 1px solid #ddd;
        word-wrap: break-all;
      }
      th {
        padding-bottom: 10px;
        font-weight: 700;
        border: 1px solid #ddd;
      }
      td {
        padding-bottom: 10px;
        border: 1px solid #ddd;
      }
      p {
        img{display:block;margin:0 auto;}
      }
      li {
        img{display:block;margin:0 auto;}
      }

      strong {
        color: #191919;
        font-size: 16px;        
      }
      pre {
        padding: 16px;
        overflow: auto;
        line-height: 1.45;
        color: #4d4d4c;
        background-color: #f3f3f3;
        border-radius: 3px;
      }
      code {
        background-color: #f3f3f3;
      }

      h1 {
        font-size: 22px;
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-size: 18px;
      }
      h4 {
        font-size: 16px;
      }
      h5 {
        font-size: 14px;
      }
      h6 {
        font-size: 12px;
      }
    `;
    const TitleBox = styled.div`
            margin:65px 0;
            text-align:center;
        h1{ 
            width:80%;
            margin:0 auto;
            font-size:24px;
            margin-bottom:5px;
        }
        p{
            margin:0;
            margin-top:5px;
            color:#999;
        }
    `;
    const Thanks = styled.div`
        text-align:center;
          font-size:15px;
          margin:60px 0;
          span{
            display:inline-block;
            height:50px;
            border-top:1px solid #e2e2e2;
            border-bottom:1px solid #e2e2e2;
            line-height:45px;
            color:#949494;
          }
    `;
    return (
      <ArticleBox>
          <QueueAnim type={'bottom'}>
          <TitleBox  key='a' >
              <h1>{this.state.value.title}</h1>
              <p>{this.state.value.date}</p>
          </TitleBox>
          <ReactMarkdown  key='b' source={this.state.value.content} />
          <Thanks>
            <span>
            Thanks For Reading
            </span>
          </Thanks>
          </QueueAnim>
          {this.state.commentData?
          <CommentsList Data={this.state.commentData} />
        :null}
          <CommentInput reloadComment={this.reloadComment.bind(this)}/>
      </ArticleBox>
    );
  }
}

export default Post