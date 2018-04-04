import React from 'react'
import "./photoBox.less"

const PhotoBox = ({currentData=[], nextDataTitle, loadMore}) => {
  return (
    <div className="photoBox" >
      {currentData.map(v => (
      <div key={v._id} className="imgBox fadeInDown">
        <p className="imgTitle">· {v.title} · </p>
        <div className="imgContent">
        {v.photoArray.map(k => (
          <img key={k} src={k} alt=""/>
        ))}
        </div>
      </div>
      ))}
      <button onClick={() => loadMore()}>
              · {nextDataTitle} ·
        </button>
    </div> 
  )
}

export default PhotoBox