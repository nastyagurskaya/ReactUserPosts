import React, { Component } from 'react';
import PostsList from './PostsList';
import EditPost from './EditPost';
import CreatePost from './CreatePost';
import { axios } from "axios";
import { Route, Redirect } from 'react-router-dom';
import SplitPane from 'react-split-pane';

const bodyDivStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  padding: '30px'
};

class PostsComponent extends Component {
 
  render() {
    return (
     
      <div>
      <Route exact path="/postslist/dashboard" component={PostsList}/>
      
      <Route path="/postslist/create" component={CreatePost}/>
      <Route path="/postslist/edit/:id" component={EditPost}/>
      </div>
    );
  }
}

export  default PostsComponent;