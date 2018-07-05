import React, { Component } from 'react';
import Post from '../Posts/Post';
import { Add } from '@material-ui/icons';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}

class EditPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "default",
      body: "default"
    };
  }
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.id).
then(response => response.json()).then((post) => {
    this.setState({
      id: post.id,
      title: post.title,
      body: post.body
    });
  });
}
setTitle(event) {
  this.setState({title: event.target.value})
}
setBody(event) {
  this.setState({body: event.target.value})
}
updatePost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.id, {
    method: 'PUT',
    body: JSON.stringify({
      id: this.state.id,
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
}
render() {
    return (
      <div className="EditPost">
      <h3><strong>{ this.state.title } Details</strong></h3>
           <Form>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" value={this.state.title} onChange={this.setTitle.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="body" sm={2}>Body</Label>
          <Col sm={10}>
            <Input type="textarea" name="body" id="body" value={this.state.body} onChange={this.setBody.bind(this)}/>
          </Col>
        </FormGroup>
      </Form>
      
      <Button onClick ={this.updatePost} >Submit</Button>
       </div>
    );
  }
}

export  default EditPost;
