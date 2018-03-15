import React from "react";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import { connect } from "react-redux";
import { getPhotoData, loadMoreImage } from '../../redux/photo.redux';
@connect(
    state=>({state:state.photo}),
    { getPhotoData, loadMoreImage }
)
export default class Photography extends React.Component {
  componentDidMount() {
      this.props.getPhotoData(this.props.state);
  }
  loadMore(){
    this.props.loadMoreImage(this.props.state);
  }
  render() {
    const ImgBox = styled.div`
      width: 960px;
      margin-top: 40px;
      text-align: center;
    `;
    const ImgTitle = styled.p`
      margin: 20px 0;
      font-size: 15px;
      color: #adadad;
    `;
    const ImgContent = styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      img {
        width: 318px;
        height: 212px;
        margin-top: 3px;
      }
    `;
    const Button = styled.div`
      position: absolute;
      height: 35px;
      padding:0 20px;
      left: 50%;
      font-size: 14px;
      line-height: 35px;
      text-align: center;
      margin-top: 80px;
      transform: translate(-50%, -50%);
      margin-bottom: 100px;
      border: 1px solid #c3c2c9;
      border-radius: 4px;
      color: #485763;
      cursor: pointer;
      :hover {
        background-color: #fdfdfd;
      }
      :active {
        background-color: #f7f7f7;
      }
    `;
    return (
      <div>
        {this.props.state.currentData!==''?
            <div>
            {this.props.state.currentData.map(v => (
              <QueueAnim key={v.title} duration={600} type={"bottom"}>
                <div key={v.title}>
                  <ImgBox key={v.title}>
                    <ImgTitle key={v.title}>· {v.title} ·</ImgTitle>
                    <ImgContent key={v.photoUrlArray}>
                      {v.photoUrlArray.map(k => <img key={k} src={k} alt="" />)}
                    </ImgContent>
                  </ImgBox>
                </div>
              </QueueAnim>
            ))}
          </div>
        :null
      }
        <Button onClick={this.loadMore.bind(this)}>
              · {this.props.state.nextDataTitle} ·
        </Button>
      </div>
    );
  }
}
