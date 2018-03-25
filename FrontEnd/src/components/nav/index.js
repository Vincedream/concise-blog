import React from 'react'
import history from '../../config/history'
import './index.less'

const Nav = ({}) => {
  return(
    <nav className="navBox reset">
      <ul>
        <li onClick={()=>history.push('/')}>文章</li>
        <li onClick={()=>history.push('/class')}>分类</li>
        <li onClick={()=>history.push('/project')}>开源</li>
        <li onClick={()=>history.push('/photo')}>摄影</li>
        <li onClick={()=>history.push('/about')}>关于</li>
      </ul>
    </nav>
  )
}

export default Nav