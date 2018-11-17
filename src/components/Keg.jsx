import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  let styledKeg ={};

  return (
    <div style={styledKeg}>
      <p>name: {props.name}</p>
      <p>brewer: {props.brewer}</p>
      <p>description: {props.description}</p>
      <p>abv: {props.abv}</p>
      <p>price: ${props.price}</p>
      <p>pints left: {props.remaining}</p>

    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired
};

export default Keg;