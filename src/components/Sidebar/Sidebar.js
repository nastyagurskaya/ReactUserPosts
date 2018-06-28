import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Sidebar.css';
import Details from '../Details/Details';
import Login from '../Login/Login';
import PostsList from '../Posts/Posts';
//import App from '/Internship/React/user-posts-client/src/App';
import { withRouter } from 'react-router-dom'
import Registration from '../Registration/Registration';
import { Face, SupervisorAccount, PersonAdd, Message, Clear} from '@material-ui/icons';
import { BrowserRouter, Link, Route } from 'react-router-dom';
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

const Sidebar = () => (
  <div className="Sidebar">
   <div  style={divStyle} >
       <ul>  
         <li>
         <Link to="/details"><span style = {iconStyle}><SupervisorAccount  /></span></Link>
         <div>
        <Route path="/details" component={Details}/>
        </div>
         </li>
       <li>
       <Link to="/login"><span style = {iconStyle}><Face /></span></Link>
       <div>
        <Route path="/login" component={Login}/>
        </div>
       </li>
       <li>
       <Link to="/registration"><span style = {iconStyle}><PersonAdd/></span></Link>
       <div>
        <Route path="/registration" component={Registration}/>
        </div>
       </li>
       <li>
       <Link to="/posts"><span style = {iconStyle}><Message /></span></Link>
       <div>
        <Route path="/posts" component={PostsList}/>
        </div>
       </li>
       <li>
       <span style = {iconStyle}><Clear/></span>
       </li>
     </ul>
       </div>
  </div>
)
// class Sidebar extends Component { 
//   render() {
//     return (
//     //<Router history={browserHistory}>
//     <div className="Sidebar">
//      <div  style={divStyle} >
//     <ul>  
//       <li>
//       <a onClick={() => { browserHistory.push('/details') }}><span style = {iconStyle}><SupervisorAccount  /></span></a>
     
//       </li>
//     <li>
//     <a onClick={() => { browserHistory.push('/login') }}><span style = {iconStyle}><Face /></span></a>
//     </li>
//     <li>
//     <a onClick={() => { browserHistory.push('/registration') }}><span style = {iconStyle}><PersonAdd/></span></a>
//     </li>
//     <li>
//     <a onClick={() => { browserHistory.push('/posts') }}><span style = {iconStyle}><Message /></span></a>
//     </li>
//     <li>
//     <a onClick={() => { browserHistory.push('/') }}><span style = {iconStyle}><Clear/></span></a>
//     </li>
//   </ul>
//     </div>
//       </div>
//     //   <Route exact path="/" component={App}/> 
//     //   <Route path="/login" component={Login}/>
//     //   <Route path="/posts" component={Posts}/>
//     //   <Route path="/details" component={Details}/>
//     //</Router>  
   
//     );
//   }
// }
export default Sidebar ;