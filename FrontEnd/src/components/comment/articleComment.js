import React from 'react'
import "./articleComment.less"
const ArticleComment = ({textValue, handleInput}) => {
  return(
    <div className="articleCom">
      <div>hahaha</div>
      <input type="text" value={textValue} onChange={(e)=>handleInput('email',e)} />
    </div>
  )
}

export default ArticleComment