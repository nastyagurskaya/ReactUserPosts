import React, { Component } from 'react';
import './sidebar.css';
import { withRouter } from 'react-router-dom'
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
class  Sidebar extends Component {
  constructor(props){
      super(props);
      this.state = {
        active: null,
        auth: this.props.auth
      };
    }
  componentDidMount(){
      this.setState({
          auth: this.props.auth
      });
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
      return "#00A8FF";
    }
    return "";
  }
  render() {
    console.log(this.props.auth);
    return (
  <div className="Sidebar">
   <div  style={divStyle} >
       { !this.props.auth ?  
       <ul>
         <li style={{background: this.myColor(1)}} onClick={() => {this.toggle(1)}}>
          <Link to="/login"><span style = {iconStyle}><SupervisorAccount/></span></Link>
        </li> 
        <li style={{background: this.myColor(2)}} onClick={() => {this.toggle(2)}}>
          <Link to="/registration"><span style = {iconStyle}><PersonAdd/></span></Link>
        </li>
      </ul> 
      : 
       <ul>
         <li style={{background: this.myColor(0)}} onClick={() => {this.toggle(0)}}>
          <Link to="/details"><span style = {iconStyle}><Face/></span></Link>
         </li>
         <li style={{background: this.myColor(3)}} onClick={() => {this.toggle(3)}}>
          <Link to="/postslist/dashboard"><span style = {iconStyle}><Message /></span></Link>
        </li>
       <li style={{background: this.myColor(4)}} onClick={() => {this.toggle(4)}}>
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