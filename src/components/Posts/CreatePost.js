import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {browserHistory} from 'react-router';
import {Redirect } from 'react-router-dom';
import { config } from '../utils/config';
import { SketchPicker } from 'react-color';
import { userPostService } from '../services/user.posts.service';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}

class CreatePost extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: "default",
          body: "default",
          color: "#fff",
          redirect: false
    };
  }
  setTitle(event) {
    this.setState({title: event.target.value})
  }
  setBody(event) {
    this.setState({body: event.target.value})
  }
  handleColorChange = (color) => {
    this.setState({ color: color.hex });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/postslist/dashboard'/>
    }
  }
  createPost = () =>{
    userPostService.createPost(this.state.title, this.state.body, this.state.color).then(response => console.log(response))  
      this.setState(
          {  redirect: true  }
      );
}

  render() {
    return (
      <div className="CreatePost">
      {this.renderRedirect()}
     <h3><strong>Create Post</strong></h3>
           <Form>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" placeholder={this.state.title} onChange={this.setTitle.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="body" sm={2}>Body</Label>
          <Col sm={10}>
            <Input type="textarea" name="body" id="body" placeholder={this.state.body} onChange={this.setBody.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="color" sm={2}>Color</Label>
          <Col sm={10}>
          <SketchPicker color={ this.state.color} onChangeComplete={ this.handleColorChange} />
          </Col>
        </FormGroup>
      </Form>
      
      <Button onClick ={this.createPost} >Submit</Button>
       </div>
    );
  }
}

export  default CreatePost;