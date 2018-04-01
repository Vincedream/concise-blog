import React from "react";
import { connect } from "react-redux";
import ClassBox from "../../components/classBox";
import { getArticleData, changeType } from "../../redux/article.redux";
import QueueAnim from "rc-queue-anim";
import SingleArticle from "../../components/article/singleArticle";


@connect(state => state, { getArticleData, changeType })
class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num:0
    };
  }
  componentDidMount() {
    if (this.props.article.items.length === 0) {
      this.props.getArticleData();
    }
  }
  handleChange(key) {
    this.props.changeType(key)
  }
  render() {
    let data = this.props.article.classObj;
    let classArr = [];
    for (var key in data) {
      classArr.push({
        title: key,
        length: data[key].length
      });
    }
    let classKey = this.props.article.choseType;
    return (
      <div className="formTop" style={{width:"580px"}}>
        <ClassBox
          choseType={this.props.article.choseType}
          handleChange={this.handleChange.bind(this)}
          classArr={classArr}
        />
        { classKey==="" ? 
        <p className="fadeInDown" style={{textAlign:"center",color:"#555",marginTop:"40px"}} >Pick one you may like it</p> :
        <QueueAnim key={this.state.num++} duration={[200,80]} type={['bottom','bottom']} >
        <div className="reset " style={{ width: "600px" }}>
          {classArr.length === 0 ? null : (
            <div className="fadeInDown   ">
              {data[classKey].map(v => (
                <SingleArticle
                  key={v._id}
                  v={v}
                  push={this.props.history.push}
                />
              ))}
            </div>
          )}
        </div>
        </QueueAnim> }
      </div>
    );
  }
}

export default Class;
