import React, { Component } from 'react';
import axios from './config/axios'
import './App.css';
import './test.less'

class App extends Component {
  async addAticle(){
    let date = new Date()
    const addArticle = axios.post('/article/new',{
      title: '1111112跨域知识点讲解66655511111',
      content: 'http',
      views: 1,
      classify: 'http',
      comments: [],
      // comments:["5ab5168cdd2630bf220ce351", "5ab5168cdd2630bf220ce352", "5ab5168cdd2630bf220ce353"],
      // comments:"5ab5168cdd2630bf220ce353",
      releaseDate: date.toLocaleDateString()
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
    const article = axios.get('/article/'+'5ab5a95f58c354d9b75c1605')
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
    const delete1 = axios.delete('/article/'+'5ab470404f1be299d67fe142')
    
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
      name:'vincedrea/nodemail'
    })
  }
  render() {
    return (
      <div >
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
      <button onClick={this.addAticle.bind(this)}>addArticle</button>
      </div>
    );
  }
}

export default App;
