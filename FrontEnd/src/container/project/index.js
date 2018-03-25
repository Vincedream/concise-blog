import React from 'react'
import ProjectBox from '../../components/project'
import { connect } from "react-redux"

import { getProjectoData } from '../../redux/project.redux'

@connect(
  state => state,
  { getProjectoData }
)
class Project extends React.Component{
  componentDidMount(){
    this.props.getProjectoData()
  }
  render(){
    return(
      <div>
        <ProjectBox data={this.props.project.items} />
      </div>
    )
  }
}

export default Project