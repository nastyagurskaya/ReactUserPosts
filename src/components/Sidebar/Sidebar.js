import React, { Component } from 'react';
import './sidebar.css';
import { Face, SupervisorAccount, PersonAdd, Message, Clear} from '@material-ui/icons';
import {  Link, Route, Redirect } from 'react-router-dom';

const iconStyle = {
    color: '#fff',
    padding: '20px',
    display: 'block'
  };
const divStyle = {
    background: '#2D2E2E',
    width: '70px',
    height: '1000px'
}
class Sidebar extends Component {
  constructor(props){
      super(props);
      this.state = {
        active: props.position
      };
    }
  toggle(position){
   this.setState({active : position})
    if(position===5) this.logout();
  }
  logout = () => {
    localStorage.setItem('authorized', 'false');
    this.setState({active : 1})
  }
  myColor(position) {
    //console.log(this.state.active);
    if (this.state.active === position) {
      return "#00A8FF";
    }
    return "";
  }
  render() {
    return (
  <div className="Sidebar">
   <div  style={divStyle} >
       {  localStorage.getItem('authorized') != 'true' ?  
       <ul>
         <li style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>
          <Link to="/login"><span style = {iconStyle}><SupervisorAccount/></span></Link>
        </li> 
        <li style={{background: this.myColor(2)}} onClick={() => {this.toggle(2)}}>
          <Link to="/registration"><span style = {iconStyle}><PersonAdd/></span></Link>
        </li>
        <Redirect to="/login" />
      </ul> 
      : 
       <ul>
         <li style={{background: this.myColor(3)}} onClick={() => {this.toggle(3)}}>
          <Link to="/details"><span style = {iconStyle}><Face/></span></Link>
         </li>
         <li style={{background: this.myColor(4)}} onClick={() => {this.toggle(4)}}>
          <Link to="/postslist/dashboard"><span style = {iconStyle}><Message /></span></Link>
        </li>
       <li style={{background: this.myColor(5)}} onClick={() => {this.toggle(5)}}>
       <span style = {iconStyle}><Clear/></span>
       </li>
       </ul>
         }
       </div>
  </div>
    );
  }
}

export default Sidebar ;