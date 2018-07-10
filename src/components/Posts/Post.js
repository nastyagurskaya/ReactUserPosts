import React from "react";
import PropTypes from "prop-types";
import { Delete, Edit } from '@material-ui/icons';
import PostsList from "./postsList";
import { Link } from "react-router-dom";
import { userPostService } from '../services/user.posts.service';

const titleStyle={
  fontSize: '1.4em'
}
const bodyStyle={
  fontSize: '1em'
}
function Post(props) {
  let color = props.color;
  if(color==null) color = '#fff';
  let postStyle={
    background: color,
    borderWidth: '8px',
    padding: '10px',
    marginBottom: '8px',
    borderRadius: '8px'
  }
  return (
    <div className="post" style={postStyle}>
      <strong><span style ={titleStyle} >{props.title}</span></strong><br/>
      <span style={bodyStyle}>{props.body}</span> <br/>
      { !props.shared ?  
      <div>
      <span onClick = {() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(props.id, props.comp)}}><Delete /></span>
      <span><Link to={'edit/'+ props.id }><Edit /></Link></span></div> :
      <div>  <span style={bodyStyle}>Shared by {props.user}</span></div>
      }
    </div>
  );
}
function deleteItem(id, comp)
{
  userPostService.deletePost(id).then(response => console.log(response));
  let posts = comp.state.posts;
  posts = Object.assign([], comp.state.posts).filter(
  item => item.id != id)  
 comp.setState({posts: posts});
}
Post.propTypes = {
  id: PropTypes.number.isRequired
};

export default Post;