import React, { Component } from 'react';
import Post from './post'
import PropTypes from "prop-types";
import { Delete } from '@material-ui/icons';
import {userPostService} from '../services/user.posts.service';

function deleteItem(id, comp)
{
  userPostService.deleteChekedPost(id).then(response => console.log(response));
  let chposts = comp.state.checkedPosts;
  chposts = Object.assign([], comp.state.checkedPosts).filter(
  item => item.id !== id);
  console.log(chposts);  
  comp.setState({checkedPosts: chposts});
}

function CheckPosts(props) {
    return (
      <div>{
        
            props.checkposts.map(function(c){
            let chitems = props.checkitems;
            chitems = Object.assign([], chitems).filter(
            item => item.checkListPostId === c.id);
            return <CheckPost key={c.id} id={c.id} title={c.title} color={c.color} comp={props.comp} checkitems={chitems}/>;
        })
        
          }
      </div>
    );
  }
  CheckPosts.propTypes = {
    checkposts: PropTypes.array.isRequired,
    checkitems: PropTypes.array.isRequired,
    
  };
export default CheckPosts;
 
class CheckPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: props.id,
          title: props.title,
          color: props.color,
          comp: props.comp,
          checkitems: props.checkitems
        }
    }
        render(){
            let postStyle={
                background: this.state.color,
                borderWidth: '8px',
                padding: '10px',
                marginBottom: '8px',
                borderRadius: '8px'
              }
            return (
                <div className="CheckPosts">
                <div className="post" style={postStyle}>
                <strong><span style ={ {fontSize: '1.4em'}} >{this.state.title}</span></strong><br/>
                <span>
                {
                    this.state.checkitems.map(function(c){
                        if(c.checked)
                        return <div key={c.id} style={{textDecoration: 'line-through'}}>{c.body}</div>
                        else return <div key={c.id}>{c.body}</div>
                    })
                }
                </span>
                <div style = {{textAlign: 'right'}}>
                <span onClick = {() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem(this.state.id, this.state.comp)}}><Delete /></span>
                </div>
                </div>
                </div>
              );
        } 
  }