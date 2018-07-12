import React, { Component } from 'react';
import Posts from './posts';
import { Add } from '@material-ui/icons';
import { Link ,Route } from 'react-router-dom';
import EditPost from './editPost';
import { userPostService } from '../services/user.posts.service';
import { Label, Input, Col, FormGroup } from 'reactstrap';
import CheckPosts from '../posts/checkposts';

const titleStyle={
    padding: '5px',
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
const searchStyle={
  padding:'10px',
  fontSize: '1.1em',
  marginLeft:'10px',
  fontFamily: 'Montserrat'
}
class PostsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      postsCopy:[],
      sharedPosts:[],
      checkedPosts:[],
      checkedItems:[]
    };
  }
searchValue(event) {
    let value = event.target.value;
    let posts = Object.assign([], this.state.postsCopy).filter(
    item => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1 ||  item.body.toLowerCase().indexOf(value.toLowerCase()) > -1);
    this.setState({posts: posts});
}
 componentDidMount() {
 userPostService.getPosts().then((posts)=>{
    this.setState({
      posts: posts,
      postsCopy: posts
    });
  }); 
  userPostService.getSharedPosts().then((posts)=>{
    this.setState({
      sharedPosts: posts
    });
  }); 
  userPostService.getCheckPosts().then((posts)=>{
    this.setState({
      checkedPosts: posts
    });
  }); 
  userPostService.getCheckItems().then((posts)=>{
    this.setState({
      checkedItems: posts
    });
  }); 
}
  render() {
    return (
      
      <div className="PostsList">
      <div style={titleStyle}>Posts</div>
      <FormGroup row>
        <Label for="searchValue" style = {searchStyle}>Search</Label>
      <Col sm={0}>
       <Input type="text" name="value" id="searchValue" placeholder="Item name..." onChange={this.searchValue.bind(this)} /></Col>
       </FormGroup>
      <div style = {createButtonStyle}> <Link to="/postslist/create"><span style={{verticalAlign: 'top'}}>Create</span><Add /></Link></div>
       <Posts posts={this.state.posts} comp = {this} />
       <div style={titleStyle}>Shared Posts With You</div>
       <Posts posts={this.state.sharedPosts} shared={true} />
       <div style={titleStyle}>Checked Posts</div>
       <CheckPosts checkposts={this.state.checkedPosts} checkitems={this.state.checkedItems} comp = {this} />
      </div>
    );
  }
}

export  default PostsList;
