import React, { Component } from 'react';
import PostsList from './postsList';
import EditPost from './editPost';
import EditCheckPost  from './editCheckPost';
import CreatePost from './createPost';
import { Route, Redirect } from 'react-router-dom';
import SplitPane from 'react-split-pane';


class PostsComponent extends Component {
 
  render() {
    return (
      <div>
      <Route exact path="/postslist/dashboard" component={PostsList}/>
      <Route path="/postslist/create" component={CreatePost}/>
      <Route path="/postslist/edit/:id" component={EditPost}/>
      <Route path="/postslist/editcheckpost/:id" component={EditCheckPost}/>
      </div>
    );
  }
}

export  default PostsComponent;