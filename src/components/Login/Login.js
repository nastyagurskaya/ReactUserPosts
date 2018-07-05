import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = () => {
    return (
      <div className="App">
         <h3><strong>Login</strong></h3>
      <Form>
        <FormGroup>
          <Label for="login">Username</Label>
          <Input type="login" name="login" id="login" placeholder="username" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password" />
        </FormGroup>
        </Form>
         
      <Button onClick ={this.login} color="primary">Login</Button>
      </div>
    );
  };

export default Login;