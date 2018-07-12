import React, { Component } from 'react';
import { userPostService } from '../services/user.posts.service';
class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 1,
      name: "default",
      username: "default",
      email: "default",
      phone: "default"
    };
  }
componentDidMount() {
 userPostService.getUserDetails().then(response => response.json()).then((user) => {
    this.setState({
      id: user.id,
      phone: user.phone,
      name: user.name,
      email: user.email,
      username: user.username
    });
  });
}
render() {
    return (
      <div className="App">
      <h2><strong>Your profile</strong></h2>
      <div>
        <p><strong>Name:</strong> { this.state.name }</p>
        <p><strong>Email:</strong> { this.state.email }</p>
        <p><strong>Phone:</strong> { this.state.phone }</p>
      </div>
      </div>
    );
  }
}

export default Details;