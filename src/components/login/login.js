import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {userPostService} from '../services/user.posts.service';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        redirectToReferrer: false,
        username: '',
        password: '',
        submitted: false
    };
        this.handleSubmit = this.handleSubmit.bind(this);
  }
  setUserName(event) {
    this.setState({username: event.target.value})
  }
  setPassword(event) {
    this.setState({password: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { username } = this.state;
    const { password } = this.state;
    if (username && password) {
        userPostService.login(username, password).then(response => {
            this.setState(() => ({
              redirectToReferrer: true
          }));
        }
      )
    }
  }
  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to="/postslist/dashboard" />
    }
    return (
      <div className="App">
      <h3><strong>Login</strong></h3>
   <Form>
     <FormGroup>
       <Label for="login">Username</Label>
       {this.state.submitted && !this.state.username &&
              <div className="help-block" style={{color:'red'}}>Username is required</div>}
       <Input type="login" name="login" id="login" placeholder="username" value={this.state.username} 
          onChange={this.setUserName.bind(this)}/>
     </FormGroup>
     <FormGroup>
       <Label for="examplePassword">Password</Label>
       {this.state.submitted && !this.state.password &&
              <div className="help-block" style={{color:'red'}}>Password is required</div>}
       <Input type="password" name="password" id="examplePassword" placeholder="password" onChange={this.setPassword.bind(this)}/>
     </FormGroup>
     </Form>
      
   <Button onClick={this.handleSubmit} color="primary">Login</Button>
   </div>
    )
  }
}