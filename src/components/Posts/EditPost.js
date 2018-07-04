import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import { Add } from '@material-ui/icons';

const titleStyle={
    padding: '10px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    fontWeight: 'bold'
}

class EditPost extends Component {
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
    //console.log(this.state.posts);
    return (
      <div className="EditPost">
      Edit Works
       </div>
    );
  }
}

export  default EditPost;
