import React, { Component } from 'react';
import { Route, Switch, withRouter} from 'react-router-dom';

import Slogon from './components/slogon'
import Nav from './components/nav'

import Article from './container/article'
import ArticlePage from './container/articlePage'
import Class from './container/class'
import Project from './container/project'
import Photo from './container/photo'
import About from './container/about'

@withRouter
class App extends Component {
  render() {
    const navList = [{title:"文章", link:"/"},{title:"分类", link:"/class"},{title:"开源", link:"/project"},{title:"摄影", link:"/photo"},{title:"关于", link:"/about"}]
    return (
      <div style={{position: 'relative',width:"100%",height:"100%"}}>
        <Slogon />
        <Nav navList={navList} />
        <Switch>
          <Route exact path="/" component={Article}></Route>
          <Route exact path="/article/:id" component={ArticlePage}></Route>
          <Route exact path="/class" component={Class}></Route>
          <Route exact path="/project" component={Project}></Route>
          <Route exact path="/photo" component={Photo}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
