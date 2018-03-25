import React from 'react'
import './articleBox.less'

const ArticleBox = ({title, classArr, date}) => {
  return(
    <div className="articleBox">
      <div className="signleBox">
        <h3 className="title">手摸手教你从购买服务器到部购买服务器到购买服务器到署第一个Node项目</h3>
        <ul>
          <li>Node</li>
          <li>线上部署</li>
        </ul>
        <p>2018 / 3 / 12</p>
      </div>
      <div className="signleBox">
        <h3 className="title">手摸手教你从购买服务器到部署第一个Node项目</h3>
        <ul>
          <li>Node</li>
          <li>线上部署</li>
        </ul>
        <p>2018 / 3 / 12</p>
      </div>
      <div className="signleBox">
        <h3 className="title">手摸手教你从购买服务器到部署第一个Node项目</h3>
        <ul>
          <li>Node</li>
          <li>线上部署</li>
        </ul>
        <p>2018 / 3 / 12</p>
      </div>
    </div>
  )
}

export default ArticleBox