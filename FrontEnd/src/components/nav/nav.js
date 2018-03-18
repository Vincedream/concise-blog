import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Nav extends React.Component {
    
  render() {
    const Nav = styled.div`
      width: 640px;
      margin-left: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const SingleButton = styled.div`
        margin-top:20px;
        width:100px;
        text-align:center;
        a{
            font-size:15px;
            color:#adadad;
        }
        a:hover{
            color:#a0a0a0;
        }
    `;
    const Line = styled.div`
        margin-top:15px;
        ::after{
        display: block;
        margin: 0 auto;
        width: 32%;
        content: '';
        height: 1px;
        background-color: #f1f1f1;
        margin-bottom:15px;
    `;
    return (
      <div>
        <Nav>
          <SingleButton>
            <Link to="/">文章</Link>
          </SingleButton>
          <SingleButton>
            <Link to="/category">分类</Link>
          </SingleButton>
          <SingleButton>
            <Link to="/photography">摄影</Link>
          </SingleButton>
          <SingleButton>
            <Link to="/about">关于</Link>
          </SingleButton>
        </Nav>
        <Line />
        
      </div>
    );
  }
}
