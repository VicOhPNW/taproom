import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let styledHeader = {
    textAlign: 'center'
  };

  return (
    <div style={styledHeader}>
      <div className="jumbotron">
        <h1>Taproom</h1>
        <Link to="/">Home</Link> | <Link to="newkeg">Add a Keg</Link>
      </div>
    </div>
  );
}

export default Header;