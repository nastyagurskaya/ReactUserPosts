import React, { Component } from 'react';
import Posts from '../Posts/Posts';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}
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
      <div style={titleStyle}>Posts</div>
       <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export  default PostsList;
