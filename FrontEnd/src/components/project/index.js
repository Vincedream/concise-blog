import React from 'react'
import QueueAnim from "rc-queue-anim";
import star from '../../img/star.png'
import fork from '../../img/fork.png'
import code from '../../img/code.png'
import './index.less'

const ProjectBox = ({data}) => {
  return(
    <div className="projectBox reset">
    {data.map(v => (
    <QueueAnim key={v._id} duration={600} type={"bottom"}>
      <div key={v._id} className="singleBox">
        <h3><a href={v.htmlUrl} target="_blank">{(v.fullName).split('/')[1]}</a></h3>
        <p>{v.description}</p>
        <span><img src={code} alt=""/>{v.language}</span>
        <ul>
          <li><img src={star} alt=""/>{v.stars}</li>
          <li><img src={fork} alt=""/>{v.forks}</li>
        </ul>
      </div>
    </QueueAnim>
    ))}
    {data.length!==0 ? (
      <div className="updateBox">
        <p>数据每5小时更新</p>
      </div>
      ):null}
    </div>
  )
}
export default ProjectBox