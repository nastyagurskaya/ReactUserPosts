import React from "react";
import PropTypes from "prop-types";

const postStyle={
  background: '#fff',
  borderWidth: '8px',
  padding: '10px',
  marginBottom: '8px',
  borderRadius: '8px'
}
const titleStyle={
  fontSize: '1.4em'
}
const bodyStyle={
  fontSize: '1em'
}
function Post(props) {
  return (
    <div className="post" style={postStyle}>
      <strong><span style ={titleStyle} >{props.title}</span></strong><br/>
      <span style={bodyStyle}>{props.body}</span>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;