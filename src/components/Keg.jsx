import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  // let styledKeg ={};

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.description}</td>
      <td>{props.abv}</td>
      <td>${props.price}</td>
      <td>{props.remaining}</td>
    </tr>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default Keg;