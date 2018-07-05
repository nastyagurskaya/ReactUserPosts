import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Registration extends Component {
  render() {
    return (
      <div className="App">
       <h3><strong>Please enter your information</strong></h3>
       <Form>
       <FormGroup>
          <Label for="firstName">First name</Label>
          <Input type="firstName" name="firstName" id="firstName" placeholder="First name" />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input type="lastName" name="lastName" id="lastName" placeholder="Last name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        <FormGroup>
          <Label for="login">Username</Label>
          <Input type="login" name="login" id="login" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone number</Label>
          <Input type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="Phone number" />
        </FormGroup>
        </Form>
         
      <Button onClick ={this.login} color="primary">Sign Up</Button>
      </div>
    );
  }
}

export default Registration;
