import React from "react";
import styled from "styled-components";
import QueueAnim from 'rc-queue-anim';
import { withRouter } from "react-router-dom";

@withRouter
class SingleArticle extends React.Component {
  render() {
    const ArticleBox = styled.div`
      width: 645px;
      height: 85px;
      padding-top: 6px;
      padding-left: 5px;
      margin-left: 160px;
      box-sizing: border-box;
      border-bottom: 1px solid #f7f7f7;
      border-radius: 2px;
      cursor: pointer;
      :hover {
        background-color: #f9f9f9;
      }
    `;
    const Title = styled.p`
      margin:0px;
      width: 440px;
      height: 40px;
      color: #485763;
      line-height: 40px;
      font-size: 16px;
      float: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
    const CateBox = styled.div`
      display: inline-block;
      box-sizing: border-box;
      width: 200px;
      height: 40px;
      color: #485763;
      padding-top: 8px;
      padding-right: 5px;
      float: right;
      font-size: 13px;
      span {
        display: inline-block;
        float: right;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        margin-left: 5px;
        background-color: #e8e8e8;
        border-radius: 3px;
        color: #888888;
      }
    `;
    const Date = styled.span`
      display: inline-block;
      margin-top: 5px;
      color: #788590;
      font-size: 14px;
    `;
    return (
      <div><QueueAnim  duration={[500,80]} type={['bottom','bottom']} >
        {this.props.articleData.map(v => (
          <ArticleBox onClick={()=>{this.props.history.push('/post/'+v._id)}} key={v.title}>
            <Title>{v.title}</Title>
            <CateBox>{v.cate.map(x => <span key={x}>{x}</span>)}</CateBox>
            <Date>{v.date}</Date>
          </ArticleBox>
        ))}
        </QueueAnim>
      </div>
    );
  }
}

export default SingleArticle
