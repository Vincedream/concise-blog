import React from 'react'
import axios from '../../config/axios'
import ContentBox from '../../components/article/contentBox'

class About extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  async getArticle(){
    const article = axios.get('/article/'+'5ab7997419add28384b2ec97')
    let result = await article
    this.setState({
      data:result.data.article
    })
    console.log(this.state.html)
  }
  componentDidMount(){
    this.getArticle()
  }
  render(){
    return(
      <div >
      <ContentBox data={this.state.data} />
      </div>
    )
  }
}

export default About