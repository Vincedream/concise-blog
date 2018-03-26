import React from 'react'
import ReactHighMark from 'react-mark-highlight'
import "./contentBox.less"
const ContentBox = ({ data }) => {
  let { title, releaseDate='1-1-1T1', content="" } = data
  console.log(content)
  return(
    <div className="contentBox">
      <div className="other">
        <h1>{title}</h1>
        <p>{releaseDate.split('-')[0]+' / '+releaseDate.split('-')[1]+' / '+(releaseDate.split('-')[2]).split('T')[0]}</p>
      </div>
      <div className="content">
        <ReactHighMark source={content} />
      </div>
    </div>
  )
}

export default ContentBox