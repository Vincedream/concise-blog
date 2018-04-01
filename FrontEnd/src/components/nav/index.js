import React from 'react'
import history from '../../config/history'
import './index.less'

const Nav = ({navList=[]}) => {
  let path = history.location.pathname
  return(
    <nav className="navBox reset">
      <ul>
        {navList.map(v => (
          <li className={path===v.link ? 'choosed' : null} key={v.title} onClick={()=>history.push(v.link)}>{v.title}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav