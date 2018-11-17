import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  var styles = {
  };

  return (
    <div style={styles}>
      <style jsx>{`
        font-family: Helvetica;
      `}</style>


      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKegForm} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
