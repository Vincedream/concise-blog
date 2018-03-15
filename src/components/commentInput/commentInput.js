import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Spin, message } from 'antd';
@withRouter
class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false
        }
    }
    isEmail(strEmail) {
        if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) !== -1){
            return true
        }
        else{
            message.error("请输入正确邮箱");
            this.setState({
                loading: false
            });
            return false
        }
    }
    isEmpty(str){
        if(str.replace(/\s+/,'') === ''){
            message.error("内容不能为空");
            this.setState({
                loading: false
            });
            return false
        }else{
            
            return true
        }
    }
    handleSubmit(){
        this.props.reloadComment()
        
        this.setState({
            loading:true
        })
        if(this.isEmail(this.refs.email.value)&&this.isEmpty(this.refs.comment.value)){
            this.submit();
        }else{
            return null
        }
        
      }
      submit(){
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();
        let date = year + ' / ' + month +' / '+ day;
        const email = this.refs.email.value;
        const content = this.refs.comment.value;
        axios({
            method:'post',
            url:"/api/comments/create",
            data:{
                postId: this.props.match.params.id,
                email,
                time: date,
                content
            }
        }).then(res=>{
            if(res.status===200&&res.data.code===0){
                this.setState({
                    loading: false
                });
                message.success("评论成功")
            }else{
                this.setState({
                    loading: false
                });
                message.error("评论失败")
            }
        })
      }
    render(){
        const CommentsBox = styled.div`
      width: 680px;
      text-align:center;
      margin-bottom:40px;
      input{
          padding-left:6px;
        height:31px;
        width:78%;
        border: 2px solid #e8e8e8;
        border-radius:3px;
      }
      div{
        display:inline-block;        
        width:20%;
        span{
          display:inline-block; 
          margin-right:-32px;
        border: 2px solid #e8e8e8;
        border-radius:3px;
        line-height:27px;
          width:100px;       
          height:32px;
          cursor: pointer;
          color:#a0a0a0;
          :hover{
            border-color:#d2d2d2;
            color:#7d7d7d;
          }
        }
      }
      textarea{
        display:block;
        border: 2px solid #e8e8e8;
        border-radius:3px;
        margin:0 auto;
        margin-top:13px;
        width:98%;
        height:200px;
        resize:none;
      }
    `;
        return(
            <div>
                <h2 style={{marginTop:"40px"}}>Talk with author :</h2>
                <Spin spinning={this.state.loading}>
            <CommentsBox>
            <input placeholder='leave your email' ref="email" type="text"/>
            <div>
            <span onClick={this.handleSubmit.bind(this)}>提交</span>
            </div>
            <textarea placeholder='Author will reply you within 24 hours with email' ref="comment"></textarea>
          </CommentsBox>
          </Spin>
            </div>
        )
    }
}
export default CommentInput