import React from 'react'
import QueueAnim from "rc-queue-anim";


class About extends React.Component{
  render(){
    return(
      <QueueAnim duration={[600,80]} type={['top','bottom']} >
      <div key="aboutMe" className="formTop" style={{textAlign:"center",color:"#8e8e8e"}}>
        <p >大三在读</p>
        <p>站在巨人的肩膀上</p>
        <p>E-mail: like@vince.studio</p>
        <p>Blog Powered By React | Mongo | Koa</p>
      </div>
        </QueueAnim>
    )
  }
}

export default About