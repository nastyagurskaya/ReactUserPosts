import React, { Component } from 'react';
import Details from './components/details/details';
import PostsComponent from './components/posts/postsComponent';
import EditPost from './components/posts/editPost';
import Auth from './components/Auth';
import Registration from './components/registration/registration';
import Sidebar from './components/sidebar/sidebar';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SplitPane from 'react-split-pane';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
class Login extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
      console.log(fakeAuth.isAuthenticated);
    })
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
       <Input type="login" name="login" id="login" placeholder="username" />
     </FormGroup>
     <FormGroup>
       <Label for="examplePassword">Password</Label>
       <Input type="password" name="password" id="examplePassword" placeholder="password" />
     </FormGroup>
     </Form>
      
   <Button onClick={this.login} color="primary">Login</Button>
   </div>
    )
  }
}
const bodyDivStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  padding: '30px'
}
const splitPaneStyle = {
  background: '#F2F2F2',
  fontFamily: 'Montserrat',
}
class LogOut extends Component{
  logout(){
    if (fakeAuth.isAuthenticated) 
  fakeAuth.signout();
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
export default function App() {
  console.log(fakeAuth.isAuthenticated);
    return (
      <div className="App">
      <SplitPane split="vertical" minSize={50} defaultSize={70} style={splitPaneStyle}>
      <div>
        <Sidebar auth = {fakeAuth.isAuthenticated}/>
      </div>
        <div style = {bodyDivStyle}>
      <PrivateRoute exact path="/details" component={Details}/>
      {/* <Route path="/login"  render={(props) => (
        <Login {...props} auth = {auth}/>
      )}/> */}
      <Route path="/login" component={Login}/>
      <Route path="/logout" component={LogOut}/>
      <Route path="/registration" component={Registration}/>
      <PrivateRoute path="/postslist" component={PostsComponent}/>
      </div>
      </SplitPane>
      </div>
    );
}

