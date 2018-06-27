import React from "react";
import PropTypes from "prop-types";


function Post(props) {
  return (
    <div className="post">
      <span>{props.title}</span>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;