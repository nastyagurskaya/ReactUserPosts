import React, { Component } from 'react';
//import Posts from './components/Posts/Posts';
import NotFoundPage from './components/NotFoundPage';

class PostsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {

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
    console.log(this.state.posts);
    return (
      <div className="PostsList">
       {/* <Posts posts={this.state.posts} /> */}
      </div>
    );
  }
}

export  default PostsList;
