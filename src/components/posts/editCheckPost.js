import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import { userPostService } from '../services/user.posts.service';
import { Clear } from '@material-ui/icons';

const postStyle={
    background: '#fff',
    borderWidth: '8px',
    padding: '8px',
    marginBottom: '10px',
    marginTop: '10px',
    borderRadius: '8px',
    width: '50%'
  }
class EditCheckPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      title: "default",
      color: "#fff",
      redirect: false,
      checkitems:[],
      item:{
        id: 0,
        body: "",
        checked: false,
        checklistpostid: this.props.match.params.id
      }
    };
  }
componentDidMount() {
  userPostService.getCheckPostbyId(this.state.id).then((post) => {
    this.setState({
      id: post.id,
      title: post.title,
      color: post.color
    });
  });
  userPostService.getCheckItemsbyPost(this.state.id).then((items) => {
    this.setState({
        checkitems:items
    });
  });
}
renderRedirect = () => {
  if (this.state.redirect) {
    return <Redirect to='/postslist/dashboard'/>
  }
}
handleColorChange = (color) => {
  this.setState({ color: color.hex });
}
setTitle(event) {
  this.setState({title: event.target.value})
}
setBody(event) {
    const { item } = this.state;
    this.setState({item:{ ...item, body: event.target.value}})
    //console.log(this.state.item)
}
setChecked(event) {
    const { item } = this.state;
    const checked = !item.checked;
    this.setState({item:{ ...item, checked: checked}})
    //console.log(this.state.item)
}
updatePost = () => {
  userPostService.updateCheckPost(this.state.id, this.state.title, this.state.color).then(response =>{
    if (response.ok == true) this.setState(
        {  redirect: true  }
      )
  })
}
createCheckItem = () => {
    const { item } = this.state;
    userPostService.createCheckItem(item).then(response =>{
        console.log(response)
        this.setState({item:{ ...item, id: response}})
        let itms = this.state.checkitems
        itms.push(this.state.item)
        this.setState({checkitems:itms, item:{...item, body:""}})
    })
  }
 
render() {
  if(this.state.color===null) this.state.color = "#fff";
  let component = this;
    return (
      <div className="EditPost">
       {this.renderRedirect()}
      <h3><strong>Edit { this.state.title }</strong></h3>
           <Form>
        <FormGroup row>
          <Label for="title" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="text" name="title" id="title" value={this.state.title} onChange={this.setTitle.bind(this)}/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="color" sm={2}>Color</Label>
          <Col sm={10}>
          <SketchPicker color={ this.state.color} onChangeComplete={ this.handleColorChange } />
          </Col>
        </FormGroup>
      </Form>
      <Button onClick ={this.updatePost} >Submit</Button>
      <h3 style={{paddingTop:'20px'}}><strong>Add/Edit check items</strong></h3>
      <Form inline>
        <FormGroup>
            {/* <Input type="text" name="body" id="body" placeholder="Check Item.." value={this.state.item.body} onChange={this.setBody.bind(this)}/> */}
            <InputGroup>
            <InputGroupAddon addonType="prepend">
            <InputGroupText>
             <Input addon type="checkbox" onChange={this.setChecked.bind(this)}/>
            </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check Item.." value={this.state.item.body} onChange={this.setBody.bind(this)}/>
             </InputGroup>
            <Button onClick={this.createCheckItem}>Add</Button>
        </FormGroup>
        </Form>
       <div>{ 
           this.state.checkitems.map(function(c){
           return <CheckItem key={c.id} id={c.id} body={c.body} checked={c.checked} checklistpostid={c.checklistpostid} comp={component}/>
           })} </div>
       </div>
    );
  }
}

export  default EditCheckPost;

class CheckItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: props.id,
          body: props.body,
          checked: props.checked,
          checklistpostid: props.checklistpostid,
          comp: props.comp,
        };
      }
      deleteItem = () => {
          let id = this.state.id;
        userPostService.deleteChekedItem(id).then(response => console.log(response));
        let items = this.state.comp.state.checkitems;
        items = Object.assign([], items).filter(
            item => item.id != id)  
        this.state.comp.setState({checkitems: items});
      }
      updateCheckItem = () => {
        let item = {
            id: this.state.id,
            body: this.state.body,
            checked: !this.state.checked,
            checklistpostid: this.state.checklistpostid,
        }
        userPostService.updateCheckItem(item).then(
            this.setState({checked: item.checked})
        )
        
        console.log(item.checked)
      }
    render(){
        if(this.state.checked)
             return <div style = {postStyle}><span style={{textDecoration: 'line-through'}}>{this.state.body}</span>
            <span style={{margin: '20px'}}><a onClick={this.deleteItem}><Clear /></a></span></div>
            else return <div style = {postStyle}><span >{this.state.body}</span>
            <span style={{margin: '20px'}}><a onClick={this.deleteItem}><Clear /></a></span></div>
    }
}