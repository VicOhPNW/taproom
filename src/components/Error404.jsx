import React from 'react';
import pic from '../assets/img/screen.png';

function Error404() {
  let styledError404 = {
    textAlign: 'center',
    color: 'red'
  };

  return(
    <div style={styledError404}>
      <h1>Page 404 Not Found</h1>
      <img src={pic} alt="it works!" />
    </div>
  );
}

export default Error404;