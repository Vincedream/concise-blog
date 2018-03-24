import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.jpg";
export default class Header extends React.Component {
  render() {
    const Header = styled.div`
      width: 640px;
      box-sizing:border-box;
      margin-left: 160px;
      display: flex;
      flex-direction:column;
     align-items: center;
    `;
    const Avatar = styled.div`
      width: 110px;
      height: 110px;
      margin-top:80px;
      border: 1px solid #eaeaea;
      border-radius: 55px;
      img {
        width: 100px;
        height: 100px;
        margin: 5px;
        border-radius: 50px;
      }
    `;
    const NickName = styled.h2`
        text-align:center;
        margin:10px 0 0 0;
    `;
    const SomeToSay = styled.p`
        text-align:center;
        margin:5px 0 0 0;
        color:#5e656b;
    `;
    return (
        <Header>
          <Avatar>
            <img
              src={avatar}
              alt="Avatar"
            />
          </Avatar>
          <NickName>
              Vince
          </NickName>
          <SomeToSay>
              Nice to meet you 
          </SomeToSay>
        </Header>
    );
  }
}
