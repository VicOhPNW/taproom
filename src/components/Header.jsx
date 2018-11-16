import React from 'react';

function Header(){
  let styledHeader = {
    textAlign: 'center'
  };

  return (
    <div style={styledHeader}>
      <div className="jumbotron">
        <h1>Alex's Taproom</h1>
      </div>
    </div>
  );
}

export default Header;