import React from 'react'
import "./articleComments.less"
const ArticleComments = ({commentsList=[]}) => {
  return(
    <div className="commentBox">
    <h2 style={{margin:"20px 0"}}>Comments :</h2>
    {commentsList.map(v => (
      <div key={v._id}>
      <h4>***{v.email.slice(3, v.email.length)} ：</h4>
      <div className="comment">{v.content}</div>
      <div className="time">
      <span>{v.createDate}</span>
      </div>
      <div className="line"></div>
      </div>
    ))}
    {commentsList.length===0 ? (<p>暂时还没有评论哦</p>) : null}
    </div>
  )
}

export default ArticleComments