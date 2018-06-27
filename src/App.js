import React, { Component } from 'react';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import Registration from './components/Registration/Registration';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import {axios, map} from "axios";
import { Router, browserHistory, Route, IndexRoute, withRouter, IndexRedirect } from 'react-router';
import NotFoundPage from './components/NotFoundPage';

class  App extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {

        // create an array of contacts only with relevant data
        const newPosts = response.data.map(c => {
          return {
            id: c.id,
            title: c.title,
            body: c.body
          };
        });

        // create a new "State" object without mutating 
        // the original State object. 
        const newState = Object.assign({}, this.state, {
          contacts: newPosts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
     {/* <Router history={browserHistory}> 
    
     
      <Route path="/" component={this}/>
          <Route path="*" component={NotFoundPage}/>
           
      </Router> */}
       <Sidebar/>
       <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export  default App;
