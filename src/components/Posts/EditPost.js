import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import { userPostService } from '../services/user.posts.service';
 

class EditPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "default",
      body: "default",
      color: "#fff",
      redirect: false
    };
  }
componentDidMount() {
  userPostService.getPostbyId(this.state.id).then((post) => {
    this.setState({
      id: post.id,
      title: post.title,
      body: post.body,
      color: post.color
    });
  });
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/postslist/dashboard'/>
  }
}
handleColorChange = (color) => {
  this.setState({ color: color.hex });
}
setTitle(event) {
  this.setState({title: event.target.value})
}
setBody(event) {
  this.setState({body: event.target.value})
}
updatePost = () => {
  userPostService.updatePost(this.state.id, this.state.title, this.state.body, this.state.color).then(response =>{
    if (response.ok == true) this.setState(
      {  redirect: true  }
    )
  })
}
render() {
  if(this.state.color===null) this.state.color = "#fff";
    return (
      <div className="EditPost">
       {this.renderRedirect()}
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
        <FormGroup row>
          <Label for="color" sm={2}>Color</Label>
          <Col sm={10}>
          <SketchPicker color={ this.state.color} onChangeComplete={ this.handleColorChange } />
          </Col>
        </FormGroup>
      </Form>
      
      <Button onClick ={this.updatePost} >Submit</Button>
       </div>
    );
  }
}

export  default EditPost;
