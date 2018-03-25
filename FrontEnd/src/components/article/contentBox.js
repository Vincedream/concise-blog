import React from 'react'
import "./contentBox.less"
const ContentBox = ({ data }) => {
  let { title, releaseDate='1-1-1T1', htmlContent } = data
  return(
    <div className="contentBox">
      <div className="other">
        <h1>{title}</h1>
        <p>{releaseDate.split('-')[0]+' / '+releaseDate.split('-')[1]+' / '+(releaseDate.split('-')[2]).split('T')[0]}</p>
      </div>
      <div className="content">
        <div dangerouslySetInnerHTML={{__html:htmlContent}} ></div>
      </div>
    </div>
  )
}

export default ContentBox