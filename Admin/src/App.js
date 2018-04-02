import React, { Component } from 'react';
import axios from './config/axios'
import './App.css';
import './test.less'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      content:''
    }
  }
  async addAticle(){
    let date = new Date()
    const addArticle = axios.post('/article/new',{
      title: '111111',
      content: this.state.content,
      views: 1,
      classify: ['Express4','Mongo8'],
      comments: [],
      // releaseDate: date.toLocaleDateString()
      releaseDate: '2017/6/2'
    })
    let result = await addArticle
    console.log(result)
  }
  async register(){
    const registerUser = axios.post('/register',{
      username: 'admin1',
      password: 'admin1'
    })
    let result = await registerUser
    console.log(result)
  }
  async login(){
    const loginUser = axios.post('/login',{
      username: 'admin1',
      password: 'admin1'
    })
    let result = await loginUser
    console.log(result)
  }
  async keywordfind(){
    const article = axios.get('/article',{
      params: {
        keyword: 'react'
      }
    })
    let result = await article
  }
  async findByPage() {
    const article = axios.get('/article/all/', {
      params: {
        page: 1,
        pageSize: 10
      }
    })
    let result = await article
  }
  
  async getArticleById() {
    const article = axios.get('/user/article/'+'5ac08530a6aebf4e0aa62c8a')
    let result = await article
  }
  async updateArticle() {
    const update = axios.patch('/article/'+'5ab470404f1be299d67fe142',{
      title: '2跨域知识点讲解77777',
      content: 'http',
      views: 1,
      classify: 'http',
    })
    let result = await update
    
  }
  async deleteArticle() {
    const delete1 = axios.delete('/article/'+'5ac0809f6dbcc1411eda466d')
    
  }
  async addComment() {
    const date = new Date()
    const result = axios.post('/comment',{
      article: 'asfd',
      email: 'like@vince.studio',
      content: 'this is content',
      createDate: date.toLocaleDateString(),
      articleId: '5ab5a95f58c354d9b75c1605'
    })
  }
  async getComment(){
    const result = axios.get('/comment')
  }
  async getProject(){
    const result = axios.get('/project')
  }
  async addProject(){
    const result = axios.post('/project',{
      fullName:'vincedream/Express_Login_Regist',
      description: `用Express为后端EJS为模版引擎Mongo数据库做的一个登录注册Demo`,
      language: 'JavaScript',
      htmlUrl:'https://github.com/Vincedream/Express_Login_Regist',
      stars: 7,
      forks: 0
    })
  }
  async addPhtot(){
    const result = axios.post('user/photo',{
      title: 'String5',
      photoArray: ["http://oz2x0vhgb.bkt.clouddn.com/jianying5.png",
      "http://oz2x0vhgb.bkt.clouddn.com/jianying5.png",
      "http://oz2x0vhgb.bkt.clouddn.com/jianying5.png",
      "http://oz2x0vhgb.bkt.clouddn.com/jianying5.png",
      "http://oz2x0vhgb.bkt.clouddn.com/jianying5.png",
      "http://oz2x0vhgb.bkt.clouddn.com/jianying5.png"]
    })
  }
  async getallar(){
    const result = axios.get('/user/article/all')
  }
  hendleInput(key,e) {
    this.setState({
      [key]: e.target.value
    })
  }
  render() {
    return (
      <div >
      <textarea onChange={ (e) => this.hendleInput('content', e) } value={this.state.content} ></textarea>
      <button onClick={this.addPhtot.bind(this)}>addPhtot</button>
      <button onClick={this.addProject.bind(this)}>addProject</button>
      <button onClick={this.addProject.bind(this)}>addProject</button>
      <button onClick={this.addProject.bind(this)}>addProject</button>
      <button onClick={this.getProject.bind(this)}>getProject</button>
      <button onClick={this.getComment.bind(this)}>getComment</button>
      <button onClick={this.addComment.bind(this)}>addComment</button>
      <button onClick={this.deleteArticle.bind(this)}>deleteArticle</button>
      <button onClick={this.updateArticle.bind(this)}>updateArticle</button>
      <button onClick={this.getArticleById.bind(this)}>getArticleById</button>
      <button onClick={this.findByPage.bind(this)}>findByPage</button>
      <button onClick={this.keywordfind.bind(this)}>keywordfind</button>
      <button onClick={this.register.bind(this)}>register</button>
      <button onClick={this.login.bind(this)}>login</button>
      <button onClick={this.getallar.bind(this)}>getallar</button>
      <button onClick={this.addAticle.bind(this)}>addArticle</button>
      </div>
    );
  }
}

export default App;
