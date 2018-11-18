import React from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
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
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
