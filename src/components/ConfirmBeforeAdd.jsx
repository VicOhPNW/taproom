import React from 'react';
import PropTypes from 'prop-types';

function ConfirmBeforeAdd(props) {
  return(
    <div>
      <p>Have you completed and checked the following before attempting to add a new keg to the system?</p>
      <ol>
        <li>This keg is NOT already registered in the system (i.e. NOT a duplicate).</li>
        <li>This keg is part of the agreed rotation for the week.</li>
        <li>You have cleaned and taken care of basic maintenance required before attatching keg.</li>
      </ol>

      <button onClick={props.onConfirmBeforeAdd}>Yes</button>
    </div>
  );
}

ConfirmBeforeAdd.propTypes = {
  onConfirmBeforeAdd: PropTypes.func
};

export default ConfirmBeforeAdd;