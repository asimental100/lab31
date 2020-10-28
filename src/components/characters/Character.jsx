import React from 'react';
import PropTypes from 'prop-types';

export const Character = ({ name, status, image }) => {
  <li>
    <h1>{name}</h1>
    <img src={image} alt={name} />
    <p>{status}</p>
  </li>;
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
