import React, { Component } from 'react';
import './Sidebar.css';
import Details from '../Details/Details';
import Login from '../Login/Login';
import Posts from '../Posts/Posts';
//import App from '/Internship/React/user-posts-client/src/App';
import { withRouter } from 'react-router-dom'
import Registration from '../Registration/Registration';
import { Face, SupervisorAccount, PersonAdd, Message, Clear} from '@material-ui/icons';
import { Router, browserHistory, Route, IndexRoute, IndexRedirect, Link } from 'react-router';
const iconStyle = {
    color: '#fff',
    padding: '20px',
    display: 'block'
  };
const divStyle = {
    background: '#2D2E2E',
    width: '70px',
    height: "100%"
}
class Sidebar extends Component { 
  render() {
    return (
    //<Router history={browserHistory}>
    <div className="Sidebar">
     <div  style={divStyle} >
    <ul>  
      <li>
      <a onClick={() => { browserHistory.push('/details') }}><span style = {iconStyle}><SupervisorAccount  /></span></a>
     
      </li>
    <li>
    <a onClick={() => { browserHistory.push('/login') }}><span style = {iconStyle}><Face /></span></a>
    </li>
    <li>
    <a onClick={() => { browserHistory.push('/registration') }}><span style = {iconStyle}><PersonAdd/></span></a>
    </li>
    <li>
    <a onClick={() => { browserHistory.push('/posts') }}><span style = {iconStyle}><Message /></span></a>
    </li>
    <li>
    <a onClick={() => { browserHistory.push('/') }}><span style = {iconStyle}><Clear/></span></a>
    </li>
  </ul>
    </div>
      </div>
    //   <Route exact path="/" component={App}/> 
    //   <Route path="/login" component={Login}/>
    //   <Route path="/posts" component={Posts}/>
    //   <Route path="/details" component={Details}/>
    //</Router>  
   
    );
  }
}
export default Sidebar ;