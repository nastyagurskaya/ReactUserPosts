import React, { Component } from 'react';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import PostsComponent from './components/Posts/PostsComponent';
import EditPost from './components/Posts//EditPost';
import Registration from './components/Registration/Registration';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { axios } from "axios";
import { Route, Redirect } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SplitPane from 'react-split-pane';

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
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)
class  App extends Component {
 
  render() {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={70} style={splitPaneStyle}>
      <div>
        <Sidebar/>
      </div>
        <div style = {bodyDivStyle}>
      <PrivateRoute exact path="/details" component={Details}/>
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registration}/>
      <PrivateRoute path="/postslist" component={PostsComponent}/>
      </div>
      </SplitPane>
    );
  }
}

export  default App;
