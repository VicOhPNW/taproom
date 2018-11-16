import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import KegList from './KegList';

function App(){
  var styles = {
  };

  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>


      <Header/>
      <KegList/>

    </div>
  );
}

//App.propTypes = {
//};

export default App;
