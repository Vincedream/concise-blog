import React from 'react'
import { connect } from "react-redux"
import { getArticleData, loadMore } from "../../redux/article.redux"
import { getPhotoData, preLoadFirstImg } from '../../redux/photo.redux'
import * as originHttp from 'axios'

import ArticleBox from '../../components/article/articleBox'

@connect(
  state => state,
  { getArticleData, loadMore, getPhotoData, preLoadFirstImg }
)
class Article extends React.Component{
  componentDidMount(){
    if (this.props.article.items.length === 0) {
      this.props.getArticleData()
    }
    if (this.props.photo.photoData.length === 0) {
      this.props.getPhotoData()
    }
  }
  componentDidUpdate(){
    // 图片预加载前三组数据
    if (this.props.photo.photoData.length !== 0 && !this.props.photo.firstPreLoad) {
      let allData = this.props.photo.photoData
      let preData = [].concat(allData[0].photoArray, allData[1].photoArray, allData[2].photoArray)
      setTimeout(()=>{
        preData.forEach(function(url){
          console.log(url)
          originHttp.get(url)
        })
        this.props.preLoadFirstImg()
      },1000)
    }
  }
  render(){
    
    const { total, loadTotal, loadItems } = this.props.article
    return(
      <div>
        <ArticleBox push={this.props.history.push} items={loadItems} loadMore={this.props.loadMore} total={total} loadTotal={loadTotal} />
      </div>
    )
  }
}

export default Article