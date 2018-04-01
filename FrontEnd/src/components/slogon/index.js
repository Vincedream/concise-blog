import React from 'react'
import avatar from "../../img/avatar.jpg";

import "./index.less"

const Slogon = () => {
  return(
    <div className="slogonBox reset">
      <div className="avatarBox">
        <img src={avatar} alt=""/>
      </div>
      <h2>Vince</h2>
      <p>Want to be an artist</p>
    </div>
  )
}

export default Slogon