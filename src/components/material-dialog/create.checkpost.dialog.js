import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {userPostService} from '../services/user.posts.service';
import { SketchPicker } from 'react-color';
import {  Col,  Label } from 'reactstrap';
import {Redirect } from 'react-router-dom';

export default class CheckPostnDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       title: '',
       color: '#fff',
       redirect: false,
       id: 0
    }
  }
  componentDidMount() {
    userPostService.getUsers().then((users)=>{
        this.setState({
           options: users.filter(
            item => item.id !== this.state.idUser)  
        });
      }); 
  }
  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  radioGroup = null;

  handleCancel = () => {
    this.props.onClose();
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/postslist/editcheckpost/'+this.state.id}/>
    }
  }
  handleOk = () => {
    userPostService.createCheckPost(this.state.title,this.state.color).then(response => {
        //console.log(response)
        this.setState({ id: response, redirect: true })
    });
    this.props.onClose();
  };
  handleColorChange = (color) => {
    this.setState({ color: color.hex });
  }
  handleChange = (event) => {
    this.setState({ title:  event.target.value });
  };

  render() {
    const { value, ...other } = this.props;
    
    return (
      <Dialog
         disableBackdropClick
        disableEscapeKeyDown
        // onEntering={this.handleEntering}
        fullWidth
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        {this.renderRedirect()}
        <DialogTitle id="confirmation-dialog-title">Create new Checklist Post</DialogTitle>
        <DialogContent>
        <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <Label for="color" sm={2}>Color</Label>
          <Col sm={10}>
          <SketchPicker color={ this.state.color} onChangeComplete={ this.handleColorChange} />
          </Col>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}