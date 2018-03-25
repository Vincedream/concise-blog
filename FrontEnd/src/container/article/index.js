import React from 'react'
import { connect } from "react-redux"
import { getArticleData } from "../../redux/article.redux"

import ArticleBox from '../../components/article/articleBox'

@connect(
  state => state.article,
  { getArticleData }
)
class Article extends React.Component{
  componentDidMount(){
    this.props.getArticleData()
  }
  render(){
    console.log(this.props)
    return(
      <div>
        <ArticleBox />
      </div>
    )
  }
}

export default Article