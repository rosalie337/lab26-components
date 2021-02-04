import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Click Me</button>

);

Button.prototype = {
  onClick: PropTypes.func.isRequired
};

export default Button;
