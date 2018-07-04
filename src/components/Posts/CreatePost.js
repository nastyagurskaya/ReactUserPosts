import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Add } from '@material-ui/icons';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      post: null
    };
  }
 componentDidMount() {
   let id = this.state.id;
   
}
  render() {
    return (
      <div className="CreatePost">
      Create Works
       </div>
    );
  }
}

export  default CreatePost;