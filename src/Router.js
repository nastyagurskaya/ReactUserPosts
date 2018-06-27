import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from '../Details/Details';
import Login from '../Login/Login';
import Posts from '../Posts/Posts';
import App from './App';
import './index.css';
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/login" component={Login}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/details" component={Details}/>
      <Route exact path="/" component={App}/>

  </Router>,
  document.getElementById('app')
)