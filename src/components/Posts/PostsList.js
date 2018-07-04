import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Add } from '@material-ui/icons';
import { Link ,Route } from 'react-router-dom';
import EditPost from './EditPost';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}
const createButtonStyle={
    paddingBottom: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'right'
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
      console.log(posts.length);
      this.setState({
        posts: posts
      });
    });
}
  render() {
    //console.log(this.state.posts);
    return (
      
      <div className="PostsList">
       
      <div style={titleStyle}>Posts</div>
      <div style = {createButtonStyle} > <Link to="/postslist/create"><span style={{verticalAlign: 'top'}}>Create</span><Add /></Link></div>
       <Posts posts={this.state.posts} func = {this.postDeleted} comp = {this} />
      </div>
    );
  }
}

export  default PostsList;
