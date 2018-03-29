import React from 'react'
import PhotoBox from '../../components/photo/photoBox'
import LoadSlogon from '../../components/loadSlogon'
import { connect } from 'react-redux'
import { getPhotoData, loadMoreImage } from '../../redux/photo.redux'

@connect(state=>state,
  {getPhotoData, loadMoreImage})
class Photo extends React.Component{
  componentDidMount(){
    this.props.getPhotoData()
  }
  render(){
    let { currentData, nextDataTitle } = this.props.photo
    return(
      <div className="formTop" style={{width:"960px"}} >
      {
        currentData.length===0 ? <LoadSlogon text="加载中,请稍候..." /> :
        <PhotoBox currentData={this.props.photo.currentData} nextDataTitle={this.props.photo.nextDataTitle} loadMore={this.props.loadMoreImage}/>
      }
      </div>
    )
  }
}

export default Photo