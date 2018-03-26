import React from 'react'
import axios from '../../config/axios'
import ContentBox from '../../components/article/contentBox'
import ArticleComment from '../../components/comment/articleComment'

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

  handleInput(key, e){
    this.setState({
      [key]: e.target.value
    })
  }

  componentDidMount(){
    this.getArticle()
  }
  render(){
    return(
      <div style={{width: "760px",position: "absolute",left: "50%",marginTop: "330px",marginLeft: "-380px"}} >
      <ContentBox data={this.state.data} />
      <ArticleComment style={{background:'red',zIndex:'1000'}} textValue={this.state.email} handleInput={this.handleInput.bind(this)} />
      </div>
    )
  }
}

export default About