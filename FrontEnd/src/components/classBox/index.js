import React from 'react'
import "./index.less"

const ClassBox = ({classArr, handleChange, choseType}) => {
  return(
    <div className="classBox fadeInDown">
      {
        classArr.map(v => (
        <span className={choseType===v.title ? 'chose' : null} onClick={() => handleChange(v.title)} key={v.title} >{v.title} ({v.length})</span>
        ))
      }
    </div>
  )
}

export default ClassBox