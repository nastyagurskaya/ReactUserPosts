import React, { Component } from 'react';
import Details from './components/details/details';
import PostsComponent from './components/posts/postsComponent';
import EditPost from './components/posts/editPost';
import Registration from './components/registration/registration';
import Sidebar from './components/sidebar/sidebar';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SplitPane from 'react-split-pane';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {userPostService} from './components/services/user.posts.service';
import Login from './components/login/login';

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
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('authorized') == 'true'
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login'
      }} />
  )} />
)
var position = 0;
export default class App extends Component {
  render() {
    if(localStorage.getItem('authorized') == 'false') position=1;
    return (
      <div className="App">
      <SplitPane split="vertical" minSize={50} defaultSize={70} style={splitPaneStyle}>
      <div>
        <Sidebar position={position}/>
      </div>
      <div style = {bodyDivStyle}>
      <PrivateRoute exact path="/details" component={Details}/>
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registration}/>
      <PrivateRoute path="/postslist" component={PostsComponent}/>
      </div>
      </SplitPane>
      </div>
    );
  }
}

