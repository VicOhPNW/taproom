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
      
      {/* 1/2 CODE FOR ERROR 404 TO SHOW W/OUT HEADER      */}
      {/* <Switch>
        <Route exact path='/' component={withHeader(KegList)} />
        <Route exact path='/newkeg' component={withHeader(NewKegForm)} />
        <Route component={Error404} />
      </Switch> */}
    </div>
  );
}

// -- 2/2 CODE FOR ERROR 404 TO SHOW W/OUT HEADER 
// const withHeader = function includeHeader(Component) {
//   return class includeHeaderComponent extends React.Component {
//     render() {
//       return ( <Header><Component/></Header> );
//     }
//   };
// };

// App.propTypes = {
// };

export default App;
