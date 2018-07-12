import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { userPostService } from '../services/user.posts.service';

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
        user: {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',  
            phoneNumber: ''
        },
        submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
  const { name, value } = event.target;
  const { user } = this.state;
  this.setState({
      user: {
          ...user,
          [name]: value
      }
  });
}

handleSubmit(event) {
  event.preventDefault();

  this.setState({ submitted: true });
  const { user } = this.state;
  if (user.firstName && user.lastName && user.userName && user.password) {
      //dispatch(userActions.register(user));
      userPostService.registrate(user).then(res => console.log(res)).then(response => {
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
      return <Redirect to="/login" />
    }
    return (
      <div className="Registration">
       <h3><strong>Please enter your information</strong></h3>
       <Form >
       <FormGroup>
          <Label for="firstName">First name</Label>
          {this.state.submitted && !this.state.user.firstName &&
              <div className="help-block" style={{color:'red'}}>First name is required</div>}
          <Input type="firstName" name="firstName" id="firstName" placeholder="First name"  value={this.state.user.firstName} 
          onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label> 
          {this.state.submitted && !this.state.user.lastName &&
              <div className="help-block" style={{color:'red'}}>Last name is required</div>}
          <Input type="lastName" name="lastName" id="lastName" placeholder="Last name" value={this.state.user.lastName} 
          onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" value={this.state.user.email} 
          onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          {this.state.submitted && !this.state.user.password &&
              <div className="help-block" style={{color:'red'}}>Password is required</div>}
          <Input type="password" name="password" id="examplePassword" placeholder="password"  value={this.state.user.password} 
          onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="login">Username</Label>
          {this.state.submitted && !this.state.user.userName &&
              <div className="help-block" style={{color:'red'}}>Username is required</div>}
          <Input type="login" name="userName" id="userName" placeholder="username" value={this.state.user.userName}  onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone number</Label>
          {this.state.submitted && !this.state.user.phoneNumber &&
              <div className="help-block" style={{color:'red'}}>Phone number is required</div>}
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone number" value={this.state.user.phoneNumber} 
          onChange={this.handleChange}/>
        </FormGroup>
        </Form>
      <Button onClick={this.handleSubmit} color="primary">Sign Up</Button>
      </div>
    );
  }
}

export default Registration;
