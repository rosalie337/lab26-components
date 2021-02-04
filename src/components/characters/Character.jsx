import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <figure>
    <img scr={image}>
      <figcaption>{name}</figcaption>
    </img>
  </figure>
);

Character.prototypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired

};

export default Character;
