import React from "react";
import "./commentInput.less";
class CommentInp extends React.Component {
  render() {
    const { submitComment, errMsg, buttonText, buttonDis } = this.props;
    return (
      <div className="commentInp">
        <h2>Talk with author :</h2>
        <div className="commentBox">
          <div className="topEmail">
            <input ref="emailInp" placeholder="leave your email" type="text" />
            <div onClick={() => submitComment()}>
              <button disabled={buttonDis} >{buttonText}</button>
            </div>
          </div>
          <textarea
            ref="contentInp"
            placeholder="Author will reply you within 24 hours with email"
          />
          <div className="msgSub">
            <span>{errMsg}</span>
            <label>订阅我的博客<input ref="checkBox" type="checkbox"/></label>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentInp;
