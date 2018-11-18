import React from 'react';

function Error404() {
  let styledError404 = {
    textAlign: 'center',
    color: 'red'
  };

  return(
    <div style={styledError404}>
      <h1>Page 404 Not Found</h1>
    </div>
  );
}

export default Error404;