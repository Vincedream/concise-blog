import React from 'react'
import { connect } from "react-redux"
import { getArticleData, loadMore } from "../../redux/article.redux"

import ArticleBox from '../../components/article/articleBox'

@connect(
  state => state,
  { getArticleData, loadMore }
)
class Article extends React.Component{
  componentDidMount(){
    if (this.props.article.items.length === 0) {
      this.props.getArticleData()
    }
  }
  render(){
    return(
      <div>
        <ArticleBox push={this.props.history.push} items={this.props.article.loadItems} loadMore={this.props.loadMore} total={this.props.article.total} loadTotal={this.props.article.loadTotal} />
      </div>
    )
  }
}

export default Article