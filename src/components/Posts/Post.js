import React, { Component }  from "react";
import PropTypes from "prop-types";
import { Delete, Edit, Share } from '@material-ui/icons';
import PostsList from "./postsList";
import { Link } from "react-router-dom";
import { userPostService } from '../services/user.posts.service';

import ConfirmationDialog from '../material-dialog/share.dialog';

const titleStyle={
  fontSize: '1.4em'
}
const bodyStyle={
  fontSize: '1em'
}
const linkStyle={
  color: '#2D2E2E'
}
const divStyle={
  textAlign: 'right'
}
function deleteItem(id, comp)
{
  userPostService.deletePost(id).then(response => console.log(response));
  let posts = comp.state.posts;
  posts = Object.assign([], comp.state.posts).filter(
  item => item.id != id)  
  comp.setState({posts: posts});
}
//function Post(props) {
export default class  Post extends Component {
  constructor(props){
        super(props);
        this.state = {
          id: props.id,
          title: props.title,
          body: props.body,
          copm: props.comp,
          color: props.color,
          user: props.user,
          shared: props.shared,
          open: false
        };
      }
      button = undefined;
      handleClickListItem = () => {
        this.setState({ open: true });
      };
    
      handleClose = (value) => {
        this.setState({ value, open: false });
       // console.log(this.state.value);
      };
    
  render(){
    let postStyle={
      background: this.state.color,
      borderWidth: '8px',
      padding: '10px',
      marginBottom: '8px',
      borderRadius: '8px'
    }
    if(this.state.color==null) this.state.color = '#fff';
    return (
    <div className="post" style={postStyle}>
      <strong><span style ={titleStyle} >{this.state.title}</span></strong><br/>
      <span style={bodyStyle}>{this.state.body}</span> <br/>
      { !this.state.shared ?  
      <div style = {divStyle}>
      <span onClick = {() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(this.state.id, this.state.copm)}}><Delete /></span>
      <span><Link style = {linkStyle} to={'edit/'+ this.state.id }><Edit /></Link></span>
      <span onClick={this.handleClickListItem}><Share/></span></div> :
      <div style = {divStyle}>  <span style={bodyStyle}>Shared by {this.state.user.name}</span></div>
      }
      <ConfirmationDialog
            open={this.state.open}
            onClose={this.handleClose}
            iduser={this.state.user.id}
            postid={this.state.id}
          />
    </div>
    );
  }
}


Post.propTypes = {
  id: PropTypes.number.isRequired
};
