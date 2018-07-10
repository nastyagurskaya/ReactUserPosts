import React, { Component } from 'react';
import Post from './post'
import PropTypes from "prop-types";

function Posts(props) {
    return (
      <div>{props.posts.map(c => <Post key={c.id} id={c.id} title={c.title} body={c.body} color={c.color} user={c.user.name} comp = {props.comp} shared={props.shared}/>)}
      </div>
    );
  }
  
  Posts.propTypes = {
    posts: PropTypes.array.isRequired
  };
export default Posts;