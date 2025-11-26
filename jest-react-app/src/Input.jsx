//Input.js

import React from 'react';

import PropTypes from 'prop-types';


const Input = ({ label, ...props }) => {

  return (

    <div>

      <label htmlFor="input-field">{label}</label>

      <input id="input-field" {...props} />

    </div>

  );

};


Input.propTypes = {

  label: PropTypes.string.isRequired,

};


export default Input;
