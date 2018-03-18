import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from "react-redux";
import { getArticleData, loadMoreArticle } from '../../redux/article.redux';
import SingleArticle from '../../components/singleArticle/singleArticle';
import LoadButton from '../../components/loadButton/loadButton';
import { getPhotoData } from '../../redux/photo.redux';
@connect(
    state => (
      { state: state.article}), 
      { getArticleData, loadMoreArticle, getPhotoData }
  )
class Article extends React.Component{
    loadMore(){
        this.props.loadMoreArticle(this.props.state);
    }
    componentDidMount(){
        this.props.getArticleData(this.props.state);
    }
    render(){
        return(
            <div>
                {this.props.state.loadData ? 
            <SingleArticle articleData={this.props.state.loadData} />
                :null
            }
                <div onClick={this.loadMore.bind(this)} >
                <QueueAnim  type={'bottom'} delay={800} >
                    <LoadButton key='a' numerator={this.props.state.loadNum} denominator={this.props.state.allArticleNum}  />
                </QueueAnim>
                </div>
            </div>
        )
    }
}
export default Article