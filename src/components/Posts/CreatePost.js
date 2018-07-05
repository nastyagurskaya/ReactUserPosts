import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Add } from '@material-ui/icons';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {browserHistory} from 'react-router';
import { Route, Redirect } from 'react-router-dom';
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
          redirect: false
    };
  }
  setTitle(event) {
    this.setState({title: event.target.value})
  }
  setBody(event) {
    this.setState({body: event.target.value})
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/postslist/dashboard'/>
    }
  }
  createPost = () =>{
     console.log(this.state.title);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))    
      this.setState(
          {  redirect: true  }
      )
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
      </Form>
      
      <Button onClick ={this.createPost} >Submit</Button>
       </div>
    );
  }
}

export  default CreatePost;