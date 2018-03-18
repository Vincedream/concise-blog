import React from "react";
import styled from "styled-components";

export default class LoadButton extends React.Component {
  render() {
    const Button = styled.div`
      position: absolute;
      width: 150px;
      height: 35px;
      left: 50%;
      font-size: 14px;
      line-height: 35px;
      text-align: center;
      margin-top:30px;
      margin-left: -75px;
      margin-bottom: 100px;
      border: 1px solid #c3c2c9;
      border-radius: 4px;
      color:#485763;
      cursor: pointer;
        :hover{
            background-color:#fdfdfd;
        }
        :active{
            background-color:#f7f7f7;
        }
    `;
    return (
      <div>
          {this.props.numerator===this.props.denominator ? 
            <Button>That is All</Button>
            :
            <Button>Load More ( {this.props.numerator}/{this.props.denominator} )</Button>
        }
      </div>
    );
  }
}
