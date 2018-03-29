import React from 'react'
import ReactHighMark from 'react-mark-highlight'
import "./contentBox.less"
const ContentBox = ({ data }) => {
  let { title, releaseDate='1-1-1T1', content="" } = data
  return(
    <div className="contentBox fadeInDown">
      <div className="other">
        <h1>{title}</h1>
        <p>{releaseDate.split('-')[0]+' / '+releaseDate.split('-')[1]+' / '+(releaseDate.split('-')[2]).split('T')[0]}</p>
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