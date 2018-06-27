import React, { Component } from 'react';
import Post from './Post'
import PropTypes from "prop-types";


function Posts(props) {
    return (
      <div>{props.posts.map(c => <Post key={c.id} title={c.title} body={c.body} />)}</div>
    );
  }
  
  Posts.propTypes = {
    posts: PropTypes.array.isRequired
  };
export default Posts;