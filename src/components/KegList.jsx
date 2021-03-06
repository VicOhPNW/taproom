import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  let styledKegList = {
    marginLeft: 50,
    marginRight: 50
  };

  return (
    <div style={styledKegList}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewer</th>
            <th>Description</th>
            <th>ABV</th>
            <th>$</th>
            <th>Pints Left</th>
          </tr>
        </thead>
        <tbody>
          {props.kegList.map((keg, index) =>
            <Keg
              names={keg.names}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              pints={keg.pints}
              key={index} />
          )}
        </tbody>
      </table>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;

// FORMER, HARD-CODED DATA
// let masterKegList = [
//   {
//     name: 'Ruby Zozzle',
//     brewer: 'Hi-Wheel',
//     description: 'Sparkling Wine & Grapefruit',
//     abv: '6.8%',
//     price: '7',
//     remaining: 20
//   },
//   {
//     name: 'Tart N Juicy',
//     brewer: 'Epic',
//     description: 'Sour IPA',
//     abv: '4.5%',
//     price: '6',
//     remaining: 60
//   },
//   {
//     name: 'Hamm\'s',
//     brewer: 'Miller/Coors',
//     description: 'American Lager',
//     abv: '4.7%',
//     price: '3',
//     remaining: 65
//   },
//   {
//     name: 'Prismatic',
//     brewer: 'Ninkasi',
//     description: 'Juicy IPA',
//     abv:  '5.9%',
//     price: '6',
//     remaining: 75
//   },
//   {
//     name: 'Juicy Haze',
//     brewer: 'New Belgium',
//     description: 'India Pale Ale',
//     abv:  '7.5%',
//     price: '6',
//     remaining: 18
//   },
//   {
//     name: '8 Hop',
//     brewer: 'New Belgium',
//     description: 'Pale Ale',
//     abv:  '5.5%',
//     price: '6',
//     remaining: 58
//   }
// ];