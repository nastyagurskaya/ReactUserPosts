import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {userPostService} from '../services/user.posts.service';

export default class ConfirmationDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        id: 0,
        postId: props.postid,
        options: [],
        idUser: props.iduser
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

  handleEntering = () => {
    this.radioGroup.focus();
  };

  handleCancel = () => {
    this.props.onClose();
  };

  handleOk = () => {
    userPostService.sharePost(this.state.id, this.state.postId).then(response => console.log(response));
    this.props.onClose();
  };

  handleChange = (event, value) => {
    this.setState({ value });
    let user = this.state.options.find(function(element) {
        return element.username === value;
      });
      this.setState({ id:user.id });
  };

  render() {
    const { value, ...other } = this.props;
    
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
        <DialogContent>
          <RadioGroup  ref={node => {
              this.radioGroup = node;
            }}  aria-label="ringtone" name="ringtone"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {this.state.options.map(option => (
              <FormControlLabel value={option.username} key={option.id} control={<Radio />} label={option.username} />
            ))}
          </RadioGroup>
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