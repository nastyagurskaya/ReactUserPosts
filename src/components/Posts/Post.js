import React from "react";
import PropTypes from "prop-types";
import { Delete, Edit } from '@material-ui/icons';
import PostsList from "./PostsList";
import { Link } from "react-router-dom";
const postStyle={
  background: '#fff',
  borderWidth: '8px',
  padding: '10px',
  marginBottom: '8px',
  borderRadius: '8px'
}
const titleStyle={
  fontSize: '1.4em'
}
const bodyStyle={
  fontSize: '1em'
}
function Post(props) {
  return (
    <div className="post" style={postStyle}>
      <strong><span style ={titleStyle} >{props.title} {props.id}</span></strong><br/>
      <span style={bodyStyle}>{props.body}</span> <br/>
      <span onClick = {() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(props.id, props.key, props.comp)}}><Delete /></span>
      <span><Link to={'edit/'+ props.id }><Edit /></Link></span>
    </div>
  );
}
function deleteItem(id, key, comp)
{
  fetch('https://jsonplaceholder.typicode.com/posts/'+id , {
  method: 'DELETE'
}).then(response => console.log(response));
 let posts = comp.state.posts;
 posts.splice(key,1);
 comp.setState({posts: posts});
}
Post.propTypes = {
  id: PropTypes.number.isRequired
};

export default Post;