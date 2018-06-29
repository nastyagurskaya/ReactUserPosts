import React, { Component } from 'react';
import './Sidebar.css';
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
    height: '1000px'
}
// const li = {
  
// }
class  Sidebar extends Component {
  constructor(props){
      super(props);
      this.state = {
        active
      };
    }

  toggle(position){
    if (this.state.active === position) {
      this.setState({active : null})
    } else {
      this.setState({active : position})
    }
  }
  
  myColor(position) {
    if (this.state.active === position) {
      return "blue";
    }
    return "";
  }
  render() {
    return (
  <div className="Sidebar">
   <div  style={divStyle} >
       <ul>  
         <li style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>
         <Link to="/details"><span style = {iconStyle}><SupervisorAccount  /></span></Link>
      
         </li>
       <li>
       <Link to="/login"><span style = {iconStyle}><Face /></span></Link>

       </li>
       <li>
       <Link to="/registration"><span style = {iconStyle}><PersonAdd/></span></Link>
     
       </li>
       <li>
       <Link to="/postslist"><span style = {iconStyle}><Message /></span></Link>

       </li>
       <li>
       <span style = {iconStyle}><Clear/></span>
       </li>
     </ul>
       </div>
  </div>
    );
  }
}

export default Sidebar ;