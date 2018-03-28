import React from 'react'
import { connect } from "react-redux"
import { getArticleData, loadMore } from "../../redux/article.redux"

@connect(
  state => state,
  { getArticleData}
)
class Class extends React.Component{
  componentDidMount(){
    if (this.props.article.items.length === 0) {
      this.props.getArticleData()
    }
  }
  render(){
    console.log(this.props.article.classObj)
    return(
      <div>
        {/* {this.props.article.classObj} */}
      </div>
    )
  }
}

export default Class