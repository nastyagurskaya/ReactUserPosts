import React, { Component } from 'react';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import Registration from './components/Registration/Registration';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { axios } from "axios";
import { Router, browserHistory, Route, IndexRoute, withRouter, IndexRedirect } from 'react-router';
import NotFoundPage from './components/NotFoundPage';

class  App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(data => {
    //   return data.json();
    //   alert(data);
    // })
    fetch('https://jsonplaceholder.typicode.com/posts').
  then(response => response.json()).then((posts) => {
      console.log(posts);
      console.log(posts.length);
      this.setState({
        posts: posts
      });
    });
}
  render() {
    return (
      <div className="App">
     {/* <Router history={browserHistory}> 
    
     
      <Route path="/" component={this}/>
          <Route path="*" component={NotFoundPage}/>
           
      </Router> */}
       <Sidebar/>
       {/* <Posts posts={this.state.posts} /> */}
      </div>
    );
  }
}

export  default App;
