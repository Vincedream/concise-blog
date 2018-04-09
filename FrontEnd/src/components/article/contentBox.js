import React from 'react'
import ReactHighMark from '../mark'
import "./contentBox.less"
const ContentBox = ({ data }) => {
  let { title, releaseDate='1-1-1T1', content="" } = data
  return(
    <div className="contentBox fadeInDown">
      <div className="other">
        <h1>{title}</h1>
        <p>{releaseDate.slice(0,10).replace(/\-/g,' / ')}</p>
      </div>
      <div className="content">
        <ReactHighMark source={content} style="diablo" />
      </div>
      
          <div className="thankBox">
            <span>
            Thanks For Reading
            </span>
          </div>
    </div>
  )
}

export default ContentBox